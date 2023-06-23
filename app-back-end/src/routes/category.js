import express from "express";
import { adminMiddleware, requireSignin } from "../common-middleware/index.js";
import { addCategory, getCategories } from "../controller/category.js";

const router = express.Router();

router.post(
  "/category/create",
  // requireSignin, adminMiddleware,
  addCategory
);
router.get("/category/get", getCategories);

export default router;
