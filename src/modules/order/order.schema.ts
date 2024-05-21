import { Schema, model } from "mongoose";
import { TOrder } from "./order.types";


const orderSchema = new Schema<TOrder>({
    email: { type: String, required: [true, "Email is required"] },
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: [true, "Product Id is required"] },
    price: { type: Number, required: [true, "Product Id is required"] },
    quantity: { type: Number, required: [true, "Quantity is required"] }
});

export const Order = model<TOrder>('Order', orderSchema);
