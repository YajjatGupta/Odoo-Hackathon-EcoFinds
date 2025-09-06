const express = require('express');
const { body } = require('express-validator');
const router = express.Router();

// Correct path and name
const authController = require('../controllers/authcontrollers'); 

router.post(
  '/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('name').notEmpty(), // changed from username to name to match schema
  authController.registerUser
);

router.post(
  '/login',
  body('email').isEmail(),
  body('password').exists(),
  authController.loginUser
);

module.exports = router;
