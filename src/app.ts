/* eslint-disable no-unused-vars */
import express, { NextFunction, Request, Response } from "express";
import { productRouter } from "./modules/product/product.route";
import { orderRouter } from "./modules/order/order.router";
import cors from "cors"
const app = express();

// cors setup
app.use(cors({ origin: "*", credentials: true }))

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
    try {
      if (error.name === "ZodError") {
        res.status(500).send({
          success: false,
          message: error.issues[0].message,
          error,
        });
      }
      res.status(500).send({
        success: false,
        message: "Something went wrong",
      });

    } catch (error) {
      console.log(error);
    }
  },
);

export default app;
