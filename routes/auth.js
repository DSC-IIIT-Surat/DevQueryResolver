const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { route } = require('.');
const JWT_SECRET = "secret_token_user";

router.post('/newuser', [
  
  body('name', 'Enter username').isAlphanumeric().isLength({ min: 6 }),
  body('email', 'Enter a valid email address').isEmail(),
  body('password', "Password length must be at least 8 characters").isLength({ min: 8 }),
  
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    let success;
    let user = await User.findOne({ username: req.body.username });

    if (user) {
      success = false;
      return res.status(400).json({ success, error: "Sorry ! Username Already Exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, salt);

    user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: securePassword
    });
    const data = {
      user: {
        id: user.id,
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success: `Successfully Created User ${req.body.username}`, authToken });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Some error occurred");
  }
});

router.post('/signin', [

  body('username', 'Enter your username').isAlphanumeric(),
  body('password', "Password length must be at least 8 characters").isLength({ min: 8 }),

], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });
    if (!user) {
      res.status(400).json({ errors: "Please enter correct credentials." });
    }
    let success;
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      res.status(400).json({ success, errors: "Please enter correct credentials." });
      success = false;
    }
    const payLoad = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(payLoad, JWT_SECRET);
    success = true;
    res.json({ success, authToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Some error occurred");
  }
});

route.delete('/deleteuser', /*middleware ,*/ async (req, res) => {
  try {
    
  } catch (error) {
    
  }
});