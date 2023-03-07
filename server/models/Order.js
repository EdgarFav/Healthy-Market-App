const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    // userId: { type: String, required: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number },
      },
    ],
    total: { type: Number, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

exports.Order = Order;
