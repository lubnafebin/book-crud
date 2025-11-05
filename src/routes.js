const express = require("express");
const Book = require("./schema");
const router = express.Router();

router.post("/book", async (req, res) => {
  try {
    const book = await Book.create(req.body);
    console.log(book);
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(201).send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/:bookId/delete", async (req, res) => {
  try {
    const bookId = req.params.bookId;
    const books = await Book.deleteOne({ _id: bookId });
    if (books.acknowledged && books.deletedCount == 1) {
      res
        .status(201)
        .json({ success: true, message: "Deleted Successfully", data: books });
    } else {
      res.status(404).json({ success: false, message: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Something Went Wrong" });
  }
});



module.exports = router;
