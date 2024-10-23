const express = require('express');
const router = express.Router();


const {
    addTransaction,
    getAllTransactions,
    getTransactionById,
    updateTransactionById,
    deleteTransactionById,
    getSummary
} = require('../controllers/transactionController');





router.post('/', addTransaction);
router.get('/', getAllTransactions);
router.get('/:id', getTransactionById);
router.put('/:id', updateTransactionById);
router.delete('/:id', deleteTransactionById);
router.get('/summary', getSummary);

module.exports = router;