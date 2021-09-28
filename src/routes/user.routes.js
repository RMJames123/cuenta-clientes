const { Router } = require('express');
const auth = require('../lib/auth.js');
/*
import { Router } from "express";
import { isLoggedIn } from "../lib/auth.js";
*/
const controller = require("../controllers/auth.controller.js");

const router = Router();

router.get("/profile", auth.isLoggedIn, controller.renderUserProfile);

module.exports = router;
