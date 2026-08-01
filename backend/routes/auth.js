const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../model/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }



    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      success: true,
      message: "Signup successful",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
  router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log(user);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Email or Password",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login Successful",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
 

module.exports = router;