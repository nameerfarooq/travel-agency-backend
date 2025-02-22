import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import webInfoRouter from "./routes/webInfoRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import { connectWithDB } from "./db.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
connectWithDB();
app.use("/user", userRouter);
app.use("/web-info", webInfoRouter);
app.use("/category", categoryRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("SERVER RUNNING");
});
