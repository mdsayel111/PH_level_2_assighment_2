import { z } from 'zod';

const variantValidateSchema = z.object({
    type: z.string({ message: "Variant type is required and cannot be empty." }),
    value: z.string({ message: "Variant value is required and cannot be empty." }),
});

const inventoryValidationSchema = z.object({
    quantity: z.number().int().nonnegative({ message: "Quantity must be a non-negative integer." }),
    inStock: z.boolean({ message: "InStock must be a boolean value." }),
});

export const productValidationSchema = z.object({
    name: z.string({ message: "Name is required!" }),
    description: z.string({ message: "Description is required!" }),
    price: z.number({ message: "Price is required!" }).positive({ message: "Price can't negetive!" }),
    category: z.string({ message: "Category is required!" }),
    tags: z.array(z.string({ message: "Tag cannot be empty." })),
    variants: z.array(variantValidateSchema),
    inventory: inventoryValidationSchema,
});
