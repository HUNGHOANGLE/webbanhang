import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    asker_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //seller
      required: true,
    },
    // taker_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User", //buyer
    //   required: true,
    // },
    size: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    order_type: {
      //buy or sell
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    sold: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
