const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");
const router = express.Router();

/* SIGNUP ROUTE */
router.post("/signup", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // 1. Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // 2. Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 3. Save user
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Signup successful",
            userId: user._id
        });
    } catch (error) {
        res.status(500).json({ message: "Signup failed", error: error.message });
    }
});


/* LOGIN ROUTE */
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // 2. Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // 3. Generate JWT token
        const token = jwt.sign(
            {
                userId: user._id,
                username: user.username
            },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "Login successful",
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Login failed", error: error.message });
    }
});

/* DASHBOARD */
router.get("/dashboard", authMiddleware, (req, res) => {
    res.status(200).json({
        message: `Welcome ${req.user.username}`
    });
});


module.exports = router;