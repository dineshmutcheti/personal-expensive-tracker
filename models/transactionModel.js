const db = require('../config/db');

// Get all transactions
const getAll = (callback) => {
    db.query('SELECT * FROM transactions', callback);
};

// Get a transaction by ID
const getById = (id, callback) => {
    db.query('SELECT * FROM transactions WHERE id = ?', [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]);
    });
};

// Add a new transaction
const create = (data, callback) => {
    db.query('INSERT INTO transactions SET ?', data, callback);
};

// Update a transaction by ID
const update = (id, data, callback) => {
    db.query('UPDATE transactions SET ? WHERE id = ?', [data, id], callback);
};

// Delete a transaction by ID
const remove = (id, callback) => {
    db.query('DELETE FROM transactions WHERE id = ?', [id], callback);
};

// Get transaction summary
const getSummaryData = (callback) => {
    db.query(`
        SELECT 
            type, 
            SUM(amount) AS total 
        FROM transactions 
        GROUP BY type`, callback);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    getSummaryData
};
