const controller = {};
const pool = require('../database.js');
//import pool from "../database.js";

controller.renderAddLink = (req, res) => {
  res.render("links/add");
};

controller.addLink = async (req, res) => {
  const { title, url, description } = req.body;
  const newLink = {
    title,
    url,
    description,
    user_id: req.user.id,
  };
  await pool.query("INSERT INTO links set ?", [newLink]);
  req.flash("success", "Link Saved Successfully");
  res.redirect("/links");
};

controller.renderLinks = async (req, res) => {
  const links = await pool.query("SELECT * FROM links WHERE user_id = ?", [
    req.user.id,
  ]);
  res.render("links/list", { links });
};

controller.deleteLink = async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM links WHERE ID = ?", [id]);
  req.flash("success", "Link Removed Successfully");
  res.redirect("/links");
};

controller.renderEditLink = async (req, res) => {
  const { id } = req.params;
  const links = await pool.query("SELECT * FROM links WHERE id = ?", [id]);
  console.log(links);
  res.render("links/edit", { link: links[0] });
};

controller.editLink = async (req, res) => {
  const { id } = req.params;
  const { title, description, url } = req.body;
  const newLink = {
    title,
    description,
    url,
  };
  await pool.query("UPDATE links set ? WHERE id = ?", [newLink, id]);
  req.flash("success", "Link Updated Successfully");
  res.redirect("/links");
};

module.exports = controller;