const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

// auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
