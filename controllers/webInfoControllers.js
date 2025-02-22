import { WebInfo } from "../models/WebInfo.models.js";

export const getWebInfo = async (req, res) => {
  try {
    const webInfo = await WebInfo.findOne();
    console.log("webInfo : ", webInfo);
    return res.status(200).json({ webInfo});
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createWebInfo = async (req, res) => {
  try {
    const { sliderImages, description } = req.body;
    const webInfo = new WebInfo({
      sliderImages,
      description,
    });

    await webInfo.save();
    res.status(201).json({ message: "Web info created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
