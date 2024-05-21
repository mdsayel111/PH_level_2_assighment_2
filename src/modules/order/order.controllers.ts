import { NextFunction, Request, Response } from "express";
import orderService from "./order.service";

export const creatOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const orderData = req.body;
    const result = await orderService.creatOrder(orderData);
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
  } catch (error) {
    next(error);
  }
};

export const getOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const query = req.query;
    // if query exists
    const queryLength = Object.keys(query).length;
    if (queryLength > 0) {
      const result = await orderService.getOrderByEmail(
        query as Record<string, string>,
      );
      return res.status(200).send({
        status: false,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
    const result = await orderService.getAllOrder();
    res.status(200).send({
      status: false,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};