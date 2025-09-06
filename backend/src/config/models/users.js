const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  productId: String,
  productName: String,
  quantity: Number,
  price: Number,
  purchasedAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  passwordHash: String,
  purchases: [purchaseSchema]
});

module.exports = mongoose.model('User', userSchema);
