import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
<<<<<<< HEAD
import Test from "./models/TestModel.js"; // ✅ import the test model

dotenv.config();
=======
import session from "express-session";
import passport from "passport";
import authRoutes from "./routes/authRoutes.js";
import googleAuth from "./routes/googleAuth.js";
import passwordRoutes from "./routes/passwordRoutes.js";

dotenv.config();
connectDB();
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07

const app = express();

// Middleware
<<<<<<< HEAD
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Default route
app.get("/", (req, res) => {
  res.send("Server is running and MongoDB is connected!");
});

// ✅ Test route to create a record and make the DB appear
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
=======
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "sessionsecret",
    resave: false,
    saveUninitialized: false,
  })
);

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);
app.use("/auth", googleAuth);
app.use("/api/password", passwordRoutes);

// Health check
app.get("/", (req, res) => res.send("✅ Hotel Booking Backend Running!"));
>>>>>>> e6007328cd1c77f74af8bc529db31c3f48275d07

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
