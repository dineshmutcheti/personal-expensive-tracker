const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Add a new category
router.post('/categories', (req, res) => {
    const { name, type } = req.body;
    const query = 'INSERT INTO categories (name, type) VALUES (?, ?)';
    db.query(query, [name, type], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error creating category' });
        }
        res.status(201).json({ message: 'Category created successfully', categoryId: results.insertId });
    });
});

// Get a category by ID
router.get('/categories/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM categories WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error fetching category' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(results[0]);
    });
});

// Update a category by ID
router.put('/categories/:id', (req, res) => {
    const { id } = req.params;
    const { name, type } = req.body;
    
    if (!name || !type) {
        return res.status(400).json({ error: 'Name and type are required' });
    }

    const query = 'UPDATE categories SET name = ?, type = ? WHERE id = ?';
    db.query(query, [name, type, id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error updating category' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json({ message: 'Category updated successfully' });
    });
});

// Delete a category by ID
router.delete('/categories/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM categories WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error deleting category' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json({ message: 'Category deleted successfully' });
    });
});

module.exports = router;
