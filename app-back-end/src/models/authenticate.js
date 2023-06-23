import mongoose from "mongoose";

const authenticateSchema = new mongoose.Schema(
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
    taker_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //buyer
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Authenticate = mongoose.model("Authenticate", authenticateSchema);

export default Authenticate;
