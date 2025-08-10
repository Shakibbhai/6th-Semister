const express = require('express');
const { addBook, searchBooks, getBookById, updateBook, updateAvailability, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.post('/', addBook);
router.get('/', searchBooks);
router.get('/:id', getBookById);
router.put('/:id', updateBook);
router.patch('/:id/availability', updateAvailability);
router.delete('/:id', deleteBook);

module.exports = router;
