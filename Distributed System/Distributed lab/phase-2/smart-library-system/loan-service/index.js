const express = require('express');
const mongoose = require('mongoose');
const loanRoutes = require('./src/routes/loanRoutes');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Loan Service connected to MongoDB'))
    .catch(err => console.error(err));

app.use('/api/loans', loanRoutes);

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
    console.log(`Loan Service running on port ${PORT}`);
});
