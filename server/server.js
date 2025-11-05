import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import Test from "./models/TestModel.js"; // ✅ import the test model

dotenv.config();

const app = express();

// Middleware
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

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
