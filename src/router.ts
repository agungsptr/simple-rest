import { Router } from "express";
import { addBook, getBook, getBookByAuthor, greeting } from "./controller";

const router = Router();

router.get("/", greeting);
router.get("/book", getBook);
router.get("/book/:author", getBookByAuthor);
router.post("/book", addBook);

export default router;
