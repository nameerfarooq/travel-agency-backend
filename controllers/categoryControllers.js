import { Category } from "../models/Category.models.js";

export const createCategory = async (req, res) => {
  try {
    const { title } = req.body;
    const category = new Category({
      title,
    });
    await category.save();
    res.status(201).json({ message: "Category created", category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    if (!categories) {
      return res.status(200).json({ message: "No categories available" });
    }
    res.status(200).json({ categories });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Category deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
