import mongoose from "mongoose";

const webInfoSchema = new mongoose.Schema({
  sliderImages: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
  },
});

export const WebInfo = mongoose.model("WebInfo", webInfoSchema);
