const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Register
const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
      name,
      email,
      password: hashedPassword
    });

    return res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error("Error in user registration:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, existedUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: existedUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      message: "Login successful",
      token
    });

  } catch (error) {
    console.error("Error in user login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { register, login };

