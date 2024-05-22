"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderUpdateValidationSchema = exports.orderValidateSchema = void 0;
const zod_1 = require("zod");
const mongoose_1 = require("mongoose");
// Validate ObjectId using regex pattern for MongoDB ObjectId
const objectIdSchema = zod_1.z
    .string()
    .refine((value) => mongoose_1.Types.ObjectId.isValid(value), {
    message: "Invalid Product Id format",
});
exports.orderValidateSchema = zod_1.z.object({
    email: zod_1.z.string({ required_error: "Email is required." }).email(),
    productId: objectIdSchema.refine((data) => data, {
        message: "Product id is required.",
    }),
    price: zod_1.z
        .number({ required_error: "Price is required." })
        .nonnegative({ message: "Price must be a non-negative number" }),
    quantity: zod_1.z
        .number({ required_error: "Quantity is required." })
        .int({ message: "Quantity must be a number." })
        .positive({ message: "Quantity must be a positive integer" }),
});
exports.orderUpdateValidationSchema = exports.orderValidateSchema.partial();
