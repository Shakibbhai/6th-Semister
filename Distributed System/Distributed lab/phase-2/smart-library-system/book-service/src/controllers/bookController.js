const Book = require('../models/book');

exports.addBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.searchBooks = async (req, res) => {
    const { search } = req.query;
    const books = await Book.find({ title: new RegExp(search, 'i') });
    res.json({ books, total: books.length });
};

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateAvailability = async (req, res) => {
    try {
        const { available_copies, operation } = req.body;
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ error: 'Book not found' });

        if (operation === 'increment') {
            book.available_copies += available_copies;
        } else if (operation === 'decrement') {
            book.available_copies -= available_copies;
        }

        book.updated_at = Date.now();
        await book.save();
        res.json({ id: book._id, available_copies: book.available_copies, updated_at: book.updated_at });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
