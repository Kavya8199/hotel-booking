import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
import crypto from "crypto";
import session from "express-session";
import passport from "passport";
import connectDB from "./config/db.js";
import Test from "./models/TestModel.js";
import authRoutes from "./routes/authRoutes.js";
import googleAuth from "./routes/googleAuth.js";
import passwordRoutes from "./routes/passwordRoutes.js";

dotenv.config();
connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "sessionsecret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/auth", googleAuth);
app.use("/api/password", passwordRoutes);

app.get("/test", async (req, res) => {
  try {
    const newTest = new Test({ name: "First record" });
    await newTest.save();
    res.send("✅ Test document added to MongoDB!");
  } catch (error) {
    console.error("Error adding test document:", error);
    res.status(500).send("❌ Failed to add test document");
  }
});

/* -------------------------------------------------------------------------- */
/* 🏨 HOTELBEDS + UNSPLASH API (live fetch)                                   */
/* -------------------------------------------------------------------------- */

const generateSignature = (apiKey, secret) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const signature = crypto
    .createHash("sha256")
    .update(apiKey + secret + timestamp)
    .digest("hex");
  return { signature, timestamp };
};

const getRandomPrice = () => {
  const price = Math.floor(Math.random() * (25000 - 5000 + 1)) + 5000;
  return Math.round(price / 100) * 100;
};

const getRandomRating = () => (Math.random() * 2 + 3).toFixed(1);

app.get("/api/hotels", async (req, res) => {
  const { city } = req.query;
  if (!city)
    return res.status(400).json({ error: "City parameter is required" });

  try {
    const apiKey = process.env.HOTELBEDS_API_KEY;
    const secret = process.env.HOTELBEDS_API_SECRET;
    const unsplashKey = process.env.UNSPLASH_API_KEY;
    const { signature } = generateSignature(apiKey, secret);

    const response = await fetch(
      `https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels?destinationCode=${city.toUpperCase()}&from=1&to=100&fields=name,categoryCode,city,address,images,ranking,minRate,maxRate`,
      {
        headers: {
          "Api-key": apiKey,
          "X-Signature": signature,
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Hotelbeds API error:", errorText);
      return res.status(response.status).json({
        error: "Hotelbeds request failed",
        details: errorText,
      });
    }

    const data = await response.json();
    if (!data.hotels || data.hotels.length === 0)
      return res.status(404).json({
        message: `No hotels found for ${city}. Check if destinationCode is valid.`,
      });

    const hotels = data.hotels.map((h) => ({
      name: h.name?.content || "Unnamed Hotel",
      address: h.address?.content || h.city?.content || "Address not available",
      rating: getRandomRating(),
      price: getRandomPrice(),
      image: h.images?.[0]?.path
        ? `https://photos.hotelbeds.com/giata/original/${h.images[0].path}`
        : null,
    }));

    const hotelsWithImages = await Promise.all(
      hotels.map(async (hotel) => {
        if (hotel.image) return hotel;
        try {
          const unsplashRes = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
              hotel.name + " hotel"
            )}&client_id=${unsplashKey}&per_page=1`
          );
          const unsplashData = await unsplashRes.json();
          hotel.image =
            unsplashData.results?.[0]?.urls?.small ||
            `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(
              city
            )}`;
        } catch {
          hotel.image = `https://source.unsplash.com/400x300/?hotel,${encodeURIComponent(
            city
          )}`;
        }
        return hotel;
      })
    );

    res.json({
      city: city.toUpperCase(),
      total: hotelsWithImages.length,
      hotels: hotelsWithImages,
    });
  } catch (error) {
    console.error("❌ Error fetching hotels:", error);
    res.status(500).json({ error: "Failed to fetch hotels from Hotelbeds API" });
  }
});

/* -------------------------------------------------------------------------- */
/* 🏙️ STATIC SAMPLE HOTELS (5 cities)                                         */
/* -------------------------------------------------------------------------- */
app.get("/api/static-hotels", (req, res) => {
  const city = req.query.city?.toLowerCase();
  let hotels = [];

  switch (city) {
    case "tirupati":
      hotels = [
        {
          name: "Fortune Select Grand Ridge",
          address: "Near Alipiri, Tirupati",
          price: 6500,
          rating: 4.4,
        },
        {
          name: "Marasa Sarovar Premiere",
          address: "Renigunta Road, Tirupati",
          price: 7200,
          rating: 4.6,
        },
        {
          name: "Pai Viceroy",
          address: "Bypass Road, Tirupati",
          price: 5400,
          rating: 4.2,
        },
        {
          name: "Hotel Bliss",
          address: "Kapila Theertham Road, Tirupati",
          price: 5800,
          rating: 4.3,
        },
        {
          name: "Kences Hotel",
          address: "Central Bus Stand, Tirupati",
          price: 5100,
          rating: 4.1,
        },
        {
          name: "Sri Vishnu Priya Residency",
          address:
            "14-3-294, Opposite to Railway Station, Railway Station Road, Tirupati, India, 517501",
          tooltip:
            "Gold star ratings are provided by the property to reflect the comfort, facilities, and amenities you can expect.",
          price: 4800,
          rating: 4.0,
        },
      ];
      break;

    case "goa":
      hotels = [
        {
          name: "Taj Exotica Resort & Spa",
          address: "Benaulim Beach, Goa",
          price: 16500,
          rating: 4.8,
        },
        {
          name: "The Leela Goa",
          address: "Mobor, Cavelossim, Goa",
          price: 19000,
          rating: 4.9,
        },
        {
          name: "Planet Hollywood Beach Resort",
          address: "Utorda Beach, Goa",
          price: 12000,
          rating: 4.5,
        },
        {
          name: "Kenilworth Resort & Spa",
          address: "Utorda, Salcete, Goa",
          price: 11500,
          rating: 4.4,
        },
        {
          name: "Novotel Goa Candolim",
          address: "Candolim, Goa",
          price: 8800,
          rating: 4.2,
        },
      ];
      break;

    case "hyderabad":
      hotels = [
        {
          name: "Taj Falaknuma Palace",
          address: "Engine Bowli, Falaknuma, Hyderabad",
          price: 25000,
          rating: 4.9,
        },
        {
          name: "ITC Kakatiya",
          address: "Begumpet, Hyderabad",
          price: 11000,
          rating: 4.6,
        },
        {
          name: "Park Hyatt Hyderabad",
          address: "Road No. 2, Banjara Hills, Hyderabad",
          price: 14000,
          rating: 4.7,
        },
        {
          name: "Radisson Blu Plaza",
          address: "Banjara Hills, Hyderabad",
          price: 9500,
          rating: 4.3,
        },
        {
          name: "The Golkonda Hotel",
          address: "Masab Tank, Hyderabad",
          price: 7200,
          rating: 4.2,
        },
      ];
      break;

    case "chennai":
      hotels = [
        {
          name: "ITC Grand Chola",
          address: "Guindy, Chennai",
          price: 15500,
          rating: 4.8,
        },
        {
          name: "The Leela Palace Chennai",
          address: "MRC Nagar, Chennai",
          price: 18500,
          rating: 4.9,
        },
        {
          name: "Taj Coromandel",
          address: "Nungambakkam, Chennai",
          price: 12500,
          rating: 4.6,
        },
        {
          name: "Trident Chennai",
          address: "Meenambakkam, Chennai",
          price: 9500,
          rating: 4.4,
        },
        {
          name: "The Raintree Hotel",
          address: "St. Mary’s Road, Alwarpet, Chennai",
          price: 8800,
          rating: 4.3,
        },
      ];
      break;

    case "bangalore":
      hotels = [
        {
          name: "The Oberoi Bengaluru",
          address: "MG Road, Bangalore",
          price: 16500,
          rating: 4.9,
        },
        {
          name: "Taj MG Road",
          address: "MG Road, Bangalore",
          price: 12800,
          rating: 4.7,
        },
        {
          name: "ITC Gardenia",
          address: "Residency Road, Bangalore",
          price: 14000,
          rating: 4.8,
        },
        {
          name: "The Leela Palace",
          address: "Old Airport Road, Bangalore",
          price: 17000,
          rating: 4.9,
        },
        {
          name: "Radisson Blu Bengaluru",
          address: "Outer Ring Road, Marathahalli, Bangalore",
          price: 9500,
          rating: 4.4,
        },
      ];
      break;

    case "mumbai":
      hotels = [
        {
          name: "The Taj Mahal Palace",
          address: "Apollo Bunder, Colaba, Mumbai",
          price: 23000,
          rating: 4.9,
        },
        {
          name: "Trident Nariman Point",
          address: "Nariman Point, Mumbai",
          price: 16500,
          rating: 4.8,
        },
        {
          name: "JW Marriott Mumbai Juhu",
          address: "Juhu Tara Road, Mumbai",
          price: 15000,
          rating: 4.7,
        },
        {
          name: "The Oberoi Mumbai",
          address: "Nariman Point, Mumbai",
          price: 18000,
          rating: 4.9,
        },
        {
          name: "Sahara Star Hotel",
          address: "Opp. Domestic Airport, Mumbai",
          price: 12000,
          rating: 4.5,
        },
      ];
      break;

    default:
      hotels = [];
  }

  if (hotels.length === 0)
    return res.status(404).json({ message: "City not found" });

  res.json({ city: city.toUpperCase(), total: hotels.length, hotels });
});

/* -------------------------------------------------------------------------- */
/* ✅ HEALTH CHECK + SERVER START                                            */
/* -------------------------------------------------------------------------- */

app.get("/", (req, res) => {
  res.send("✅ Hotel Booking Backend Running & MongoDB Connected!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Combined Server running on http://localhost:${PORT}`)
);
