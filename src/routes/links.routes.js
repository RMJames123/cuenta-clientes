const express = require('express');
const auth = require('../lib/auth.js');
const controller = require('../controllers/links.controller.js');

/*
import { Router } from "express";
import { isLoggedIn } from "../lib/auth.js";
import {
  renderAddLink,
  addLink,
  renderLinks,
  deleteLink,
  editLink,
  renderEditLink,
} from "../controllers/links.controller.js";
*/

const router = express.Router();
// Authorization
router.use(auth.isLoggedIn);

// Routes
router.get("/add", controller.renderAddLink);
router.post("/add", controller.addLink);
router.get("/", auth.isLoggedIn, controller.renderLinks);
router.get("/delete/:id", controller.deleteLink);
router.get("/edit/:id", controller.renderEditLink);
router.post("/edit/:id", controller.editLink);

module.exports = router;
