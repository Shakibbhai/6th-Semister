const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); 
const userRoutes = require('./src/routes/userRoutes');
require('dotenv').config();

const app = express();

app.use(morgan('combined'));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('User Service connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});
