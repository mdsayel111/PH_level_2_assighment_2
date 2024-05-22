import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariant } from "./product.types";

const inventorySchema = new Schema<TInventory>({
  inStock: Boolean,
  quantity: Number,
});
const variantsSchema = new Schema<TVariant>({
  type: String,
  value: String,
});

const productSchema = new Schema<TProduct>({
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

export const Product = model<TProduct>("Product", productSchema);
