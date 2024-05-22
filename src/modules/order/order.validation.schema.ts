import { z } from "zod";
import { Types } from "mongoose";

// Validate ObjectId using regex pattern for MongoDB ObjectId
const objectIdSchema = z
  .string()
  .refine((value) => Types.ObjectId.isValid(value), {
    message: "Invalid Product Id format",
  });

export const orderValidateSchema = z.object({
  email: z.string({ required_error: "Email is required." }).email(),
  productId: objectIdSchema.refine((data) => data, {
    message: "Product id is required.",
  }),
  price: z
    .number({ required_error: "Price is required." })
    .nonnegative({ message: "Price must be a non-negative number" }),
  quantity: z
    .number({ required_error: "Quantity is required." })
    .int({ message: "Quantity must be a number." })
    .positive({ message: "Quantity must be a positive integer" }),
});

export const orderUpdateValidationSchema = orderValidateSchema.partial();
