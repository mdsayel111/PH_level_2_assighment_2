/* eslint-disable no-unused-vars */
import express, { NextFunction, Request, Response } from "express";
import { productRouter } from "./modules/product/product.route";
import { orderRouter } from "./modules/order/order.router";
const app = express();

// parse json
app.use(express.json());

// routes
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});

// not found route handler
app.all("*", (req: Request, res: Response) => {
    res.status(404).send({
        success: false,
        message: "No route found!",
    });
});

// global error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use(
    (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        error: any,
        req: Request,
        res: Response,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        next: NextFunction,
    ): void => {
        console.log(error)
        res.status(500).send({
            success: false,
            message: error.message,
            error,
        });
    },
);

export default app;
