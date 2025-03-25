const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
import dotenv from "dotenv";
const helmet = require("helmet");
const { body, validationResult } = require("express-validator");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(helmet());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "your_default_mongo_uri_here", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    poolSize: 10 
  })
    .then(() => console.log("Connected to MongoDB with connection pooling"))
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1); // Exit the process if the database connection fails
    });
    
// Import routes
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

// Use routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Example route with validation
app.post("/api/products", [
  body("name").isString().notEmpty(),
  body("price").isFloat({ gt: 0 })
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // Handle valid request
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));