const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');       // Add morgan for logging
const bookRoutes = require('./src/routes/bookRoutes');
require('dotenv').config();

const app = express();

// Use morgan middleware for HTTP request logging in 'combined' format
app.use(morgan('combined'));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Book Service connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Book Service running on port ${PORT}`);
});
