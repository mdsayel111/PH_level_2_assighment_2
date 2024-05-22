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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSingleProduct = exports.updateSingleProduct = exports.getSingleProduct = exports.getAllProduct = exports.creatProduct = void 0;
const product_service_1 = __importDefault(require("./product.service"));
const creatProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_service_1.default.creatProduct(productData);
        res.status(200).send({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.creatProduct = creatProduct;
const getAllProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        const queryLength = Object.keys(query).length;
        // if query exist
        if (queryLength > 0) {
            // search products
            const result = yield product_service_1.default.searchProduct(query);
            return res.status(200).send({
                success: true,
                message: "Product fetched successfully!",
                data: result,
            });
        }
        const result = yield product_service_1.default.getAllProduct();
        res.status(200).send({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getAllProduct = getAllProduct;
const getSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.default.getSingleProduct(productId);
        res.status(200).send({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getSingleProduct = getSingleProduct;
const updateSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const productData = req.body;
        const result = yield product_service_1.default.updateSingleProduct(productId, productData);
        res.status(200).send({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.updateSingleProduct = updateSingleProduct;
const deleteSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        yield product_service_1.default.deleteSingleProduct(productId);
        res.status(200).send({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteSingleProduct = deleteSingleProduct;
