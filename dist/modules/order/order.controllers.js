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
exports.getOrder = exports.creatOrder = void 0;
const order_service_1 = __importDefault(require("./order.service"));
const customError_1 = require("../../customError");
const creatOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_1.default.creatOrder(orderData);
        if (result) {
            return res.status(200).send({
                status: true,
                message: "Order created successfully!",
                data: result,
            });
        }
        res.status(404).send({
            status: false,
            message: "Insufficient quantity available in inventory",
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }
    catch (error) {
        if (error.name === "ZodError") {
            // eslint-disable-next-line no-ex-assign
            error = new customError_1.CustomError(error.issues[0].message, error);
        }
        next(error);
    }
});
exports.creatOrder = creatOrder;
const getOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query;
        // if query exists
        const queryLength = Object.keys(query).length;
        if (queryLength > 0) {
            const result = yield order_service_1.default.getOrderByEmail(query);
            // if data find by email
            if (result.length > 0) {
                return res.status(200).send({
                    status: true,
                    message: "Orders fetched successfully!",
                    data: result,
                });
            }
            return res.status(404).send({
                status: false,
                message: "Order not found",
            });
        }
        const result = yield order_service_1.default.getAllOrder();
        res.status(200).send({
            status: false,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getOrder = getOrder;
