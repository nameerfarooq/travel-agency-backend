import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isDiscountValid: {
    type: Boolean,
    default: false,
  },
  discountPercentage: {
    type: String,
    default: "0",
  },
  discountValidTill: {
    type: Date,
    default: new Date().setMonth(new Date().getMonth() + 1),
  },
  features: {
    type: {
      tickets: {
        type: Boolean,
        default: false,
      },
      visa: {
        type: Boolean,
        default: false,
      },
      transport: {
        type: Boolean,
        default: false,
      },
      food: {
        type: Boolean,
        default: false,
      },
      hotels: {
        type: Boolean,
        default: false,
      },
      gift: {
        type: Boolean,
        default: false,
      },
    },
  },
  airline: {
    type: String,
    default: "PIA",
  },
  description: {
    type: String,
    default: "",
  },
  departureDate: {
    type: Date,
    required: true,
  },
  arrivalDate: {
    type: Date,
    required: true,
  },
  departureCity: {
    type: String,
    default: "KHI",
  },
  landingCity: {
    type: String,
    default: "JED",
  },
  hotels: {
    type: [String],
    default: [],
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

export const Package = mongoose.model("Package", packageSchema);
