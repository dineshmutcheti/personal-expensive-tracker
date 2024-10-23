const db = require('../config/db');


const getAll = (callback) => {
    db.query('SELECT * FROM transactions', callback);
};


const getById = (id, callback) => {
    db.query('SELECT * FROM transactions WHERE id = ?', [id], (err, results) => {
        if (err) return callback(err);
        callback(null, results[0]);
    });
};


const create = (data, callback) => {
    db.query('INSERT INTO transactions SET ?', data, callback);
};


const update = (id, data, callback) => {
    db.query('UPDATE transactions SET ? WHERE id = ?', [data, id], callback);
};


const remove = (id, callback) => {
    db.query('DELETE FROM transactions WHERE id = ?', [id], callback);
};


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
