import { Router } from "express";
import { addBook, getBook, getBookByAuthor } from "./book.controller";

const router = Router();

router.get("/book", getBook);
router.get("/book/:author", getBookByAuthor);
router.post("/book", addBook);

export default router;
