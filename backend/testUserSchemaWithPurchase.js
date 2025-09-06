// testUserSchemaWithPurchase.js
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/config/models/users'); // adjust path if needed

// Check the environment variable
console.log('MONGO_URI:', process.env.MONGODB_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.error('❌ MongoDB connection error:', err);
  process.exit(1);
});

// Function to test creating a user and adding purchases
const testUserWithPurchases = async () => {
  try {
    // 1️⃣ Check if test user exists
    let user = await User.findOne({ email: 'testuser@example.com' });

    if (!user) {
      // 2️⃣ Create the test user
      user = new User({
        username: 'TestUser',
        email: 'testuser@example.com',
        passwordHash: 'hashedpassword123', // can be plain for test
        purchases: [] // start empty
      });
      await user.save();
      console.log('✅ Test user created');
    } else {
      console.log('ℹ️ Test user already exists');
    }

    // 3️⃣ Add sample purchases
    const samplePurchases = [
      { productName: 'EcoBag', quantity: 2, price: 299 },
      { productName: 'Reusable Bottle', quantity: 1, price: 499 }
    ];

    user.purchases.push(...samplePurchases);

    await user.save();

    // 4️⃣ Fetch updated user and print
    const updatedUser = await User.findOne({ email: 'testuser@example.com' });
    console.log('🛒 Updated user with purchases:', updatedUser);

  } catch (err) {
    console.error('❌ Error during test:', err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the test
testUserWithPurchases();
