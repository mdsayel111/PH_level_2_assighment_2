"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_schema_1 = require("./product.schema");
const product_validation_schema_1 = require("./product.validation.schema");
const creatProduct = (data) => {
    product_validation_schema_1.productValidateSchema.parse(data);
    const result = product_schema_1.Product.create(data);
    return result;
};
const getAllProduct = () => {
    const result = product_schema_1.Product.find({});
    return result;
};
const searchProduct = (query) => {
    const result = product_schema_1.Product.find({
        name: new RegExp(query.searchTerm, "i"),
    });
    return result;
};
const getSingleProduct = (productId) => {
    const result = product_schema_1.Product.findById(productId);
    return result;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateSingleProduct = (productId, productData) => {
    const result = product_schema_1.Product.findOneAndUpdate({ _id: productId }, productData, {
        returnDocument: "after",
    });
    return result;
};
const deleteSingleProduct = (productId) => {
    const result = product_schema_1.Product.deleteOne({ _id: productId });
    return result;
};
exports.default = {
    creatProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteSingleProduct,
    searchProduct,
};
