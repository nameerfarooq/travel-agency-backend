import express from "express";
import {
  createPackage,
  deleteThisPackage,
  getAllPackages,
  getSpecificPackage,
} from "../controllers/packageControllers.js";
import { authorizeToken } from "../middlewares/index.js";

const router = express.Router();

router.post("/create-package", authorizeToken, createPackage);
router.get("/get-all-packages", getAllPackages);
router.delete("/delete-package/:id", deleteThisPackage);
router.get("/get-specific-package/:id", getSpecificPackage);

export default router;
