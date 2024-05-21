import { z } from 'zod';

const variantValidateSchema = z.object({
    type: z.string({ required_error: "Variant type is required and cannot be empty." }),
    value: z.string({ required_error: "Variant value is required and cannot be empty." }),
});

const inventoryValidateSchema = z.object({
    quantity: z.number().int().nonnegative({ message: "Quantity must be a non-negative integer." }),
    inStock: z.boolean({ message: "InStock must be a boolean value." }),
});

export const productValidateSchema = z.object({
    name: z.string({ required_error: "Name is required and cannot be empty." }),
    description: z.string({ required_error: "Description is required and cannot be empty." }),
    price: z.number({ required_error: "Price is required and cannot be empty." }).positive(),
    category: z.string({ required_error: "Category is required and cannot be empty." }),
    tags: z.array(z.string(), { required_error: "Tag cannot be empty." }).refine(val => val.length > 0, { message: "Tags must contain at least one tag." }),
    variants: z.array(variantValidateSchema, { required_error: "Variant is required." })
        .refine(val => val.length > 0, { message: "Variants must contain at least one variant." }),
    inventory: inventoryValidateSchema.refine(data => data.quantity >= 0 && typeof data.inStock === 'boolean', {
        message: "Inventory must have a valid quantity and inStock status.",
    }),
});
