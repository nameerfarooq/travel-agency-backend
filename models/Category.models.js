import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Category = mongoose.model("Category", categoriesSchema);
