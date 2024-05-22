"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
const updateSingleProduct = (productId, productData) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const productFromDB = yield product_schema_1.Product.findById(productId);
    let updateDoc = productData;
    // if user want to update quantity
    if (typeof ((_a = productData === null || productData === void 0 ? void 0 : productData.inventory) === null || _a === void 0 ? void 0 : _a.quantity) !== "undefined") {
        const availableQuantity = ((_b = productFromDB === null || productFromDB === void 0 ? void 0 : productFromDB.inventory) === null || _b === void 0 ? void 0 : _b.quantity) + ((_c = productData === null || productData === void 0 ? void 0 : productData.inventory) === null || _c === void 0 ? void 0 : _c.quantity);
        // if quantity is getter than 0 then set inStock true
        if (availableQuantity > 0) {
            updateDoc = Object.assign(Object.assign({}, updateDoc), { inventory: {
                    inStock: true,
                    quantity: availableQuantity,
                } });
        }
    }
    product_validation_schema_1.productUpdateValidationSchema.safeParse(productData);
    const result = product_schema_1.Product.findOneAndUpdate({ _id: productId }, updateDoc, {
        new: true,
        runValidators: true,
    });
    return result;
});
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
