const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./src/routes/bookRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Book Service connected to MongoDB'))
    .catch(err => console.error(err));

app.use('/api/books', bookRoutes);

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Book Service running on port ${PORT}`);
});
