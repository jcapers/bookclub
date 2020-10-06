const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const config = require('../config/config');
const validateRegistration = require("../util/validation/registerValidation");
const validateLogin = require("../util/validation/loginValidation");
const User = require("../models/userModel");


/*
* User Registration Route
* POST /users/register
*/
router.post("/register", (req, res) => {
  // Validate
  const { errors, isValid } = validateRegistration(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Valid so check if user already exists
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }

    // Proceed with creating a new user
    const newUser = new User({
      name: req.body.name,
      displayName: req.body.displayName,
      email: req.body.email,
      password: req.body.password
    });

    // Hash Password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          return res.status(400).json({ error: err});
        };
        newUser.password = hash;
        newUser.save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});