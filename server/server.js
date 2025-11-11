import express from "express";
import dotenv from "dotenv";
import cors from "cors";
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

// ✅ Middleware
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

// ✅ Passport
app.use(passport.initialize());
app.use(passport.session());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/auth", googleAuth);
app.use("/api/password", passwordRoutes);

// ✅ Test MongoDB connection
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

// ✅ Health check
app.get("/", (req, res) => {
  res.send("✅ Hotel Booking Backend Running & MongoDB Connected!");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
