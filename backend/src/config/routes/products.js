const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authmiddleware');
const Product = require('../models/Product');

// @route   POST /api/products
// @desc    Create a new product
// @access  Private
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { title, description, price, category } = req.body;
    const newProduct = new Product({
      title,
      description,
      price,
      category,
      owner: req.user.id,
    });
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// @route   GET /api/products
// @desc    Fetch all products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('owner', 'username email');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// @route   GET /api/products/my
// @desc    Fetch products by the authenticated user
// @access  Private
router.get('/my', authMiddleware, async (req, res) => {
  try {
    const products = await Product.find({ owner: req.user.id });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;