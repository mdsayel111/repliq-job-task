// models/Wishlist.js

const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    cart: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const wishlist =
  mongoose.models.Wishlist || mongoose.model("Wishlist", wishlistSchema);
export default wishlist;
