import mongoose from "mongoose";

const portfolioItemSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    purchase_price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Portfolio_Item = mongoose.model("Portfolio_Item", portfolioItemSchema);

export default Portfolio_Item;
