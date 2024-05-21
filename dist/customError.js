"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, error) {
        super(message);
        this.error = error;
    }
}
exports.CustomError = CustomError;
