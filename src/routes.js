const express = require('express');
const Book = require('./schema');
const router = express.Router();

router.post('/book', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        console.log(book);
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(404).send(error);
    }
})
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(201).send(books);
    } catch (error) {
        res.status(500).send(error)
    }
})



module.exports = router;