const { text } = require("express");
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Test = mongoose.model("Test", testSchema);
module.exports = {
  Test,
};
