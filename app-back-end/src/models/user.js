import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    phoneNumber: {
      type: String,
    },
    shoeSize: {
      type: String,
    },
    // portfolio: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Product", //through: portfolio_items
    //   },
    // ],
    // taken_orders: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Order", //taker_id
    //   },
    // ],
    // listed_orders: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Order", //asker_id
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

userSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

//module.exports = mongoose.model('User', userSchema);

const User = mongoose.model("User", userSchema);

export default User;
