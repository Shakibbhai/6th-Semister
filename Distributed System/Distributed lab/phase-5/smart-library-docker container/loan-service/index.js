const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); // Add morgan for request logging
const loanRoutes = require('./src/routes/loanRoutes');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Use morgan middleware for HTTP request logging in 'combined' format
app.use(morgan('combined'));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Loan Service connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/loans', loanRoutes);

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
    console.log(`Loan Service running on port ${PORT}`);
});
