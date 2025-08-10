const Loan = require('../models/loan');
const axios = require('axios');

exports.issueBook = async (req, res) => {
    const { user_id, book_id, due_date } = req.body;

    try {
        // Validate user
        const userResponse = await axios.get(`${process.env.USER_SERVICE_URL}/api/users/${user_id}`);
        if (userResponse.status !== 200) return res.status(404).json({ error: 'User  not found' });

        // Validate book
        const bookResponse = await axios.get(`${process.env.BOOK_SERVICE_URL}/api/books/${book_id}`);
        if (bookResponse.status !== 200 || bookResponse.data.available_copies <= 0) {
            return res.status(400).json({ error: 'Book not available' });
        }

        // Create loan
        const loan = new Loan({ user_id, book_id, due_date });
        await loan.save();

        // Update book availability
        await axios.patch(`${process.env.BOOK_SERVICE_URL}/api/books/${book_id}/availability`, {
            available_copies: 1,
            operation: 'decrement'
        });

        res.status(201).json(loan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.returnBook = async (req, res) => {
    const { loan_id } = req.body;

    try {
        const loan = await Loan.findById(loan_id);
        if (!loan) return res.status(404).json({ error: 'Loan not found' });

        loan.status = 'RETURNED';
        loan.return_date = Date.now();
        await loan.save();

        // Update book availability
        await axios.patch(`${process.env.BOOK_SERVICE_URL}/api/books/${loan.book_id}/availability`, {
            available_copies: 1,
            operation: 'increment'
        });

        res.json(loan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserLoans = async (req, res) => {
    const { user_id } = req.params;

    try {
        const loans = await Loan.find({ user_id });
        res.json({ loans, total: loans.length });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getLoanById = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.id);
        if (!loan) return res.status(404).json({ error: 'Loan not found' });
        res.json(loan);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
