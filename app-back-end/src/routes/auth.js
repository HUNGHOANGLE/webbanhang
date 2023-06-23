import express from "express";
import {
  validateSignupRequest,
  isRequestValidated,
  validateSigninRequest,
} from "../validators/auth.js";
import { signin, signup } from "../controller/auth.js";
const router = express.Router();

router.post("/signin", validateSigninRequest, isRequestValidated, signin);

router.post("/signup", validateSignupRequest, isRequestValidated, signup);

// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// });

export default router;
