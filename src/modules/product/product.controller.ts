/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import productService from "./product.service";

export const creatProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productData = req.body;
    const result = await productService.creatProduct(productData);
    res.status(200).send({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const query = req.query;
    const queryLength = Object.keys(query).length;
    console.log(query);
    // if query exist
    if (queryLength > 0) {
      // search products
      const result = await productService.searchProduct(
        query as Record<string, string>,
      );
      return res.status(200).send({
        success: true,
        message: "Product fetched successfully!",
        data: result,
      });
    }
    const result = await productService.getAllProduct();
    res.status(200).send({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const result = await productService.getSingleProduct(productId);
    res.status(200).send({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const updateSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    const result = await productService.updateSingleProduct(
      productId,
      productData,
    );
    res.status(200).send({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const deleteSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    await productService.deleteSingleProduct(productId);
    res.status(200).send({
      success: true,
      message: "Product deleted successfully!",
      data: null,
    });
  } catch (error: any) {
    next(error);
  }
};
