
import express from "express";
// import bookModel from "../model/bookModel.js";
const router=express.Router();
import { getAllBooks,addBook,getSpecificBook, updateBook, patchUpdate, deleteBook } from "../controllers/books-controllers.js";



router.get("/", getAllBooks);
router.post("/", addBook);
router.get("/:id",getSpecificBook);
router.put("/:id",updateBook);
router.patch("/:id",patchUpdate);
router.delete("/:id",deleteBook);

export default router;