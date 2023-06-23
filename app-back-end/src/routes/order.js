import express from "express";
import { create, getAll, update, deleteById } from "../controller/order.js";

const router = express.Router();

router.post("/order/create", create);

router.get("/order/getAll", getAll);

router.put("/order/:id", update);

router.delete("/order/:id", deleteById);

export default router;
