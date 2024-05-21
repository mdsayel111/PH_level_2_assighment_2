import express from "express";
import {
  creatProduct,
  deleteSingleProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
} from "./product.controller";

const router = express.Router();

router.post("/", creatProduct);
router.get("/", getAllProduct);
router.get("/:productId", getSingleProduct);
router.put("/:productId", updateSingleProduct);
router.delete("/:productId", deleteSingleProduct);

export const productRouter = router;
