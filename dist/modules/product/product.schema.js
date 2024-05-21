"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
// import { productValidationSchema } from "./product.validation.schema";
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
// productSchema.pre("save", async function (next) {
//   productValidationSchema.parse(this)
//   next()
// })
exports.Product = (0, mongoose_1.model)("Product", productSchema);
