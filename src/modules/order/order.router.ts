import express from "express";
import { creatOrder, getOrder } from "./order.controllers";

const router = express.Router();

router.post("/", creatOrder);
router.get("/", getOrder);

export const orderRouter = router;
