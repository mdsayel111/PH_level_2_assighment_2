import express from "express"
import { creatOrder, getOrder } from "./order.controllers"
// import { creatProduct, deleteSingleProduct, getAllProduct, getSingleProduct, updateSingleProduct } from "./product.controller"

const router = express.Router()

router.post("/", creatOrder)
router.get("/", getOrder)
// router.get("/:productId", getSingleProduct)
// router.put("/:productId", updateSingleProduct)
// router.delete("/:productId", deleteSingleProduct)

export const orderRouter = router 