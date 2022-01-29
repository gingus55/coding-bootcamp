const { Router } = require("express");

const {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBookById,
} = require("../../controllers/api/music");

const router = Router();

router.get("/", getMusic);

router.get("/:id", getMusicById);

router.post("/", createBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBookById);

module.exports = router;
