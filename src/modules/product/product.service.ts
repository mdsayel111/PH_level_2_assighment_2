import { Product } from "./product.schema";
import { TProduct } from "./product.types";

const creatProduct = (data: TProduct) => {
    const result = Product.create(data)
    return result
}
const getAllProduct = () => {
    const result = Product.find({})
    return result
}
const getSingleProduct = (productId: string) => {
    const result = Product.findById(productId)
    return result
}

const updateSingleProduct = (productId: string, productData: any) => {
    const result = Product.findOneAndUpdate({ _id: productId }, productData, { returnDocument: "after" })
    return result
}

const deleteSingleProduct = (productId: string) => {
    const result = Product.updateOne({ _id: productId }, { isDelete: true })
    return result
}

export default {
    creatProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct
}