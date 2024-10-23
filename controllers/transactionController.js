const { getAll, getById, create, update, remove, getSummaryData } = require('../models/transactionModel');


const addTransaction = (req, res) => {
    const { type, category_id, amount, date, description } = req.body;
    create({ type, category_id, amount, date, description }, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Transaction added', transactionId: result.insertId });
    });
};


const getAllTransactions = (req, res) => {
    getAll((err, transactions) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(transactions);
    });
};


const getTransactionById = (req, res) => {
    const { id } = req.params;
    console.log("Transaction ID:", id); // Log the ID being passed
    getById(id, (err, transaction) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        if (!transaction) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.json(transaction);
    });
};


const updateTransactionById = (req, res) => {
    const { id } = req.params;
    const { type, category_id, amount, date, description } = req.body;
    update(id, { type, category_id, amount, date, description }, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Transaction updated' });
    });
};

// Controller to delete a transaction
const deleteTransactionById = (req, res) => {
    const { id } = req.params;
    remove(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Transaction deleted' });
    });
};


const getSummary = (req, res) => {
    getSummaryData((err, summary) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(summary);
    });
};





module.exports = {
    addTransaction,
    getAllTransactions,
    getTransactionById,
    updateTransactionById,
    deleteTransactionById,
    getSummary
};
