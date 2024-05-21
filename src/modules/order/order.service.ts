import { Product } from "../product/product.schema";
import { Order } from "./order.schema";
import { TOrder } from "./order.types";
import { orderValidateSchema } from "./order.validation.schema";

const creatOrder = async (orderData: TOrder) => {
  const product = await Product.findById(orderData.productId);
  const availableQuantity =
    (product?.inventory?.quantity as number) - orderData.quantity;

  // if product in stock
  if (availableQuantity >= 0 && product?.inventory?.inStock) {
    orderValidateSchema.parse(orderData);
    const result = await Order.create(orderData);
    if (result) {
      // decrease quantity of product
      await Product.updateOne(
        { _id: orderData.productId },
        {
          $inc: { "inventory.quantity": -orderData.quantity },
          "inventory.inStock": availableQuantity > 0 ? true : false,
        },
      );
    }
    return result;
  }
};

const getAllOrder = () => {
  const result = Order.find({});
  return result;
};

const getOrderByEmail = async (query: Record<string, string>) => {
  const result = Order.find({ email: query.email });
  return result;
};

export default {
  creatOrder,
  getAllOrder,
  getOrderByEmail,
};
