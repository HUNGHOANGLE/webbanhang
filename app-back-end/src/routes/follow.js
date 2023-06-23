import express from "express";
import { create, getAll, update, deleteById } from "../controller/follow.js";

const router = express.Router();

router.post("/follow/create", create);

router.get("/follow/getAll", getAll);

router.put("/follow/:id", update);

router.delete("/follow/:id", deleteById);

export default router;
