import express from "express";
import {
  create,
  getAll,
  update,
  deleteById,
} from "../controller/authenticate.js";

const router = express.Router();

router.post("/authenticate/create", create);

router.get("/authenticate/getAll", getAll);

router.put("/authenticate/:id", update);

router.delete("/authenticate/:id", deleteById);

export default router;
