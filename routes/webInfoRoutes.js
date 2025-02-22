import express from "express";
import {
  createWebInfo,
  getWebInfo,
} from "../controllers/webInfoControllers.js";
import { authorizeToken } from "../middlewares/index.js";

const router = express.Router();

router.post("/create-web-info", authorizeToken, createWebInfo);
router.get("/get-web-info", getWebInfo);

export default router;
