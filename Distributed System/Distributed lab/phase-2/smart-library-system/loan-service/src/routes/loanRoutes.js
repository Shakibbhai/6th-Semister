const express = require('express');
const { issueBook, returnBook, getUserLoans, getLoanById } = require('../controllers/loanController');
const router = express.Router();

router.post('/', issueBook);
router.post('/returns', returnBook);
router.get('/user/:user_id', getUserLoans);
router.get('/:id', getLoanById);

module.exports = router;
