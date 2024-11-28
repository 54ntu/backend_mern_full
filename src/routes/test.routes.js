const express = require("express");
const { addtask } = require("../controllers/test.controllers");
const Router = express.Router();

Router.route("/add").post(addtask);

module.exports = {
  Router,
};
