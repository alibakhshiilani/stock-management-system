const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { login, refreshToken } = require('../controllers/authController');

// User login
router.post('/login', login);

// Refresh access token
// router.post('/refresh-token', refreshToken);

module.exports = router;
