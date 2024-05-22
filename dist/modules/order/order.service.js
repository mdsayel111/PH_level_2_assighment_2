"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
const product_schema_1 = require("../product/product.schema");
const order_schema_1 = require("./order.schema");
const order_validation_schema_1 = require("./order.validation.schema");
const creatOrder = (orderData) =>
  __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const product = yield product_schema_1.Product.findById(
      orderData.productId,
    );
    const availableQuantity =
      ((_a =
        product === null || product === void 0 ? void 0 : product.inventory) ===
        null || _a === void 0
        ? void 0
        : _a.quantity) - orderData.quantity;
    // if product in stock
    if (
      availableQuantity >= 0 &&
      ((_b =
        product === null || product === void 0 ? void 0 : product.inventory) ===
        null || _b === void 0
        ? void 0
        : _b.inStock)
    ) {
      order_validation_schema_1.orderValidateSchema.parse(orderData);
      const result = yield order_schema_1.Order.create(orderData);
      if (result) {
        // decrease quantity of product
        yield product_schema_1.Product.updateOne(
          { _id: orderData.productId },
          {
            $inc: { "inventory.quantity": -orderData.quantity },
            "inventory.inStock": availableQuantity > 0 ? true : false,
          },
        );
      }
      return result;
    }
  });
const getAllOrder = () => {
  const result = order_schema_1.Order.find({});
  return result;
};
const getOrderByEmail = (query) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = order_schema_1.Order.find({ email: query.email });
    return result;
  });
exports.default = {
  creatOrder,
  getAllOrder,
  getOrderByEmail,
};
