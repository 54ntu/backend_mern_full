const express = require("express");
const { addtask, getTask } = require("../controllers/test.controllers");
const Router = express.Router();

Router.route("/add").post(addtask);
Router.route("/gettask").get(getTask);

module.exports = {
  Router,
};
