const express = require('express');
const auth = require('./auth.routes.js');
const index = require('./index.routes.js');
const links = require('./links.routes.js');
const user = require('./user.routes.js');
//import { Router } from "express";
//import auth from "./auth.routes.js";
//import index from "./index.routes.js";
//import links from "./links.routes.js";
//import user from "./user.routes.js";

const router = express.Router();

router.use(index);
router.use(auth);
router.use(user);
router.use("/links", links);

module.exports = router;
