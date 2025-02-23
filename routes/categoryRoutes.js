import express from "express";
import { authorizeToken } from "../middlewares/index.js";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
} from "../controllers/categoryControllers.js";

const router = express.Router();

router.post("/create-category", authorizeToken, createCategory);
router.get("/get-all-categories", getAllCategories);
router.delete("/delete-category/:id", authorizeToken, deleteCategory);

export default router;
