const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    book_id: mongoose.Schema.Types.ObjectId,
    issue_date: { type: Date, default: Date.now },
    due_date: Date,
    return_date: Date,
    status: { type: String, default: 'ACTIVE' }
});

module.exports = mongoose.model('Loan', loanSchema);
