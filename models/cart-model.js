import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    cart: {
      type: [mongoose.Schema.Types.Mixed], // You can replace Mixed with a specific schema if needed
      default: [],
    },
  },
  { timestamps: true }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", userSchema);

export default Cart;
