import express from "express";
import { signin, signup } from "../../controller/admin/auth.js";
import {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} from "../../validators/auth.js";

const router = express.Router();

router.post("/admin/signin", validateSigninRequest, isRequestValidated, signin);

router.post("/admin/signup", validateSignupRequest, isRequestValidated, signup);

//module.exports = router;

export default router;
