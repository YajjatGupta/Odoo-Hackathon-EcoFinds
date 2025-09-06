// backend/src/config/controllers/purchaseController.js
const User = require('../models/users');

exports.addPurchase = async (req, res) => {
  const { userId, productId, productName, quantity, price } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.purchases.push({ productId, productName, quantity, price });
    await user.save();

    res.json({ msg: 'Purchase added', purchases: user.purchases });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
};
