const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authcontrollers');
const authMiddleware = require('../middleware/authmiddleware'); // ✅ add this

// Register
router.post('/register',
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('username').notEmpty(),
  authController.register
);

// Login
router.post('/login',
  body('email').isEmail(),
  body('password').exists(),
  authController.login
);

// Add purchase (Protected)
router.post('/purchase',
  authMiddleware, // ✅ protects this route
  body('productName').notEmpty(),
  body('quantity').isInt({ min: 1 }),
  body('price').isNumeric(),
  authController.addPurchase
);

module.exports = router;
