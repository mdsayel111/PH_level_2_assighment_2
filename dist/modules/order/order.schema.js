"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: { type: String, required: [true, "Email is required"] },
    productId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "Product Id is required"],
    },
    price: { type: Number, required: [true, "Product Id is required"] },
    quantity: { type: Number, required: [true, "Quantity is required"] },
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
