"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const inventorySchema = new mongoose_1.Schema({
  inStock: Boolean,
  quantity: Number,
});
const variantsSchema = new mongoose_1.Schema({
  type: String,
  value: String,
});
const productSchema = new mongoose_1.Schema({
  name: { type: String, required: [true, "Name is required"] },
  price: { type: Number, required: [true, "Price is required"] },
  category: { type: String, required: [true, "Category is required"] },
  description: { type: String, required: [true, "Description is required"] },
  tags: { type: [String], required: [true, "Tags is required"] },
  inventory: {
    type: inventorySchema,
    required: [true, "Inventory is required"],
  },
  variants: {
    type: [variantsSchema],
    required: [true, "Inventory is required"],
  },
  isDelete: {
    type: Boolean,
    default: false,
  },
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
