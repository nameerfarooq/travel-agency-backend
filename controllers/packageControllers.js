import { Package } from "../models/Package.models.js";
export const createPackage = async (req, res) => {
  try {
    console.log("aaaa :", req.body);
    if (!req.body) {
      return res.status(400).json({ message: "Provide all data!" });
    }
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.status(201).json({ message: "Package created", newPackage });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
export const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json({ packages });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getSpecificPackage = async (req, res) => {
  try {
    const id = req.params.id;
    const existingPackage = await Package.findById(id);
    res.status(200).json({ existingPackage });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
export const deleteThisPackage = async (req, res) => {
  try {
    const id = req.params.id;
    await Package.findByIdAndDelete(id);
    res.status(200).json({ message: "Package deleted!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
