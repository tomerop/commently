const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const Joi = require("joi");
const { User } = require("../Models/user");
const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) return res.status(418).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Invalid email or password.");
  let token = null;
  const valiedPassword = await bcrypt.compare(req.body.password, user.password);
  if (valiedPassword) token = user.generateJWT();
  token ? res.send(token) : res.status(400).send("Invalid email or password. ");
});
function validate(req) {
  const schema = {
    email: Joi.string().min(4).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
  };

  return Joi.validate(req, schema);
}

module.exports = router;
