const { Router }  = require('express');
//import { Router } from "express";
const router = Router();

const { renderIdex } = require("../controllers/index.controller.js");
//import { renderIndex } from "../controllers/index.controller.js";

router.get("/", renderIndex);

module.exports = router;
