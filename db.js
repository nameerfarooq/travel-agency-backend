import mongoose from "mongoose";

export const connectWithDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MONGO DB CONNECTED");
    })
    .catch((err) => {
      console.log("MONGO ERROR : ", connectWithDB);
    });
};
