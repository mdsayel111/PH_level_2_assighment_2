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

const searchProduct = (query: Record<string, string>) => {
    const result = Product.find({ name: new RegExp(query.searchTerm, "i") })
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
    const result = Product.deleteOne({ _id: productId })
    return result
}

export default {
    creatProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
    searchProduct
}