import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    retail_price: {
      type: Number,
      required: true,
    },
    release_date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    // size: {
    //   type: Number,
    // },
    img_path: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    // updateAt: Date,
    // portfolios: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Portfolio_Item",
    //   },
    // ],
    // owners: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //   },
    // ],
    // orders: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Order",
    //   },
    // ],
    // sales: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Sale",
    //   },
    // ],
    // follows: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Follow",
    //   },
    // ],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
