import { Product } from "./product.schema";
import { TProduct } from "./product.types";
import {
  productUpdateValidationSchema,
  productValidateSchema,
} from "./product.validation.schema";

const creatProduct = (data: TProduct) => {
  productValidateSchema.parse(data);
  const result = Product.create(data);
  return result;
};

const getAllProduct = () => {
  const result = Product.find({});
  return result;
};

const searchProduct = (query: Record<string, string>) => {
  const result = Product.find({
    name: new RegExp(query.searchTerm, "i"),
  });
  return result;
};

const getSingleProduct = (productId: string) => {
  const result = Product.findById(productId);
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateSingleProduct = async (productId: string, productData: any) => {
  const productFromDB = await Product.findById(productId);
  let updateDoc = productData;
  // if user want to update quantity
  if (typeof productData?.inventory?.quantity !== "undefined") {
    const availableQuantity =
      productFromDB?.inventory?.quantity + productData?.inventory?.quantity;
    // if quantity is getter than 0 then set inStock true
    if (availableQuantity > 0) {
      updateDoc = {
        ...updateDoc,
        inventory: {
          inStock: true,
          quantity: availableQuantity,
        },
      };
    }
  }
  productUpdateValidationSchema.safeParse(productData);
  const result = Product.findOneAndUpdate({ _id: productId }, updateDoc, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteSingleProduct = (productId: string) => {
  const result = Product.deleteOne({ _id: productId });
  return result;
};

export default {
  creatProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  searchProduct,
};
