require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', require('./src/config/routes/auth'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
