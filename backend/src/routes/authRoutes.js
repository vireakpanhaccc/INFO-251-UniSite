
const express = require('express');
const { db } = require('../config/mongoClient');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const {Login, Register, refreshAccessToken} = require("../controllers/authController");

const authRouter = express.Router();

// User registration
authRouter.post('/register', Register);

// User login
authRouter.post('/login', Login);

// Token refresh
authRouter.post('/refresh-token', refreshAccessToken);

module.exports = authRouter;