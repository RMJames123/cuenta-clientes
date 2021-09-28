const express = require('express');
//import { Router } from "express";
const router = express.Router();

const controller = require('../controllers/auth.controller.js');
/*
import {
  renderSignUp,
  signUp,
  renderSignIn,
  signIn,
  logout,
} from "../controllers/auth.controller.js";
*/

// SIGNUP
router.get("/signup", controller.renderSignUp);
router.post("/signup", controller.signUp);

// SINGIN
router.get("/signin", controller.renderSignIn);
router.post("/signin", controller.signIn);

router.get("/logout", controller.logout);

module.exports = router;
