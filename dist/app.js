"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const express_1 = __importDefault(require("express"));
const product_route_1 = require("./modules/product/product.route");
const order_router_1 = require("./modules/order/order.router");
const app = (0, express_1.default)();
// parse json
app.use(express_1.default.json());
// routes
app.use("/api/products", product_route_1.productRouter);
app.use("/api/orders", order_router_1.orderRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// not found route handler
app.all("*", (req, res) => {
    res.status(404).send({
        success: false,
        message: "No route found!",
    });
});
// global error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((
// eslint-disable-next-line @typescript-eslint/no-explicit-any
error, req, res, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
next) => {
    try {
        res.status(500).send({
            success: false,
            message: error.message,
            error,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = app;
