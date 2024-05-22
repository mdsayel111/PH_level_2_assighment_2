"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateValidationSchema = exports.productValidateSchema = void 0;
const zod_1 = require("zod");
const variantValidateSchema = zod_1.z.object({
    type: zod_1.z.string({
        required_error: "Variant type is required and cannot be empty.",
    }),
    value: zod_1.z.string({
        required_error: "Variant value is required and cannot be empty.",
    }),
});
const inventoryValidateSchema = zod_1.z.object({
    quantity: zod_1.z
        .number()
        .int()
        .nonnegative({ message: "Quantity must be a non-negative integer." }),
    inStock: zod_1.z.boolean({ message: "InStock must be a boolean value." }),
});
exports.productValidateSchema = zod_1.z.object({
    name: zod_1.z.string({ required_error: "Name is required and cannot be empty." }),
    description: zod_1.z.string({
        required_error: "Description is required and cannot be empty.",
    }),
    price: zod_1.z
        .number({ required_error: "Price is required and cannot be empty." })
        .positive(),
    category: zod_1.z.string({
        required_error: "Category is required and cannot be empty.",
    }),
    tags: zod_1.z
        .array(zod_1.z.string(), { required_error: "Tag cannot be empty." })
        .refine((val) => val.length > 0, {
        message: "Tags must contain at least one tag.",
    }),
    variants: zod_1.z
        .array(variantValidateSchema, { required_error: "Variant is required." })
        .refine((val) => val.length > 0, {
        message: "Variants must contain at least one variant.",
    }),
    inventory: inventoryValidateSchema.refine((data) => data.quantity >= 0 && typeof data.inStock === "boolean", {
        message: "Inventory must have a valid quantity and inStock status.",
    }),
});
exports.productUpdateValidationSchema = exports.productValidateSchema.partial();
