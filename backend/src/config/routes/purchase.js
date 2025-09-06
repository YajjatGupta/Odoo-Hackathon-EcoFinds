// backend/src/config/routes/purchase.js
const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchasecontroller');

router.post('/add', purchaseController.addPurchase);

module.exports = router;
