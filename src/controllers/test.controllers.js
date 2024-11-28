const { Test } = require("../models/test.models");

const addtask = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "title is required...!!!" });
  }

  try {
    const response = await Test.create({ title });
    console.log("response we are getting is : ", response);
    if (response) {
      return res
        .status(200)
        .json({ message: "task added successfully..!!!", data: response });
    } else {
      return res.status(500).json({
        message: "something went wrong...!!!",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong.!",
    });
  }
};

const getTask = async (req, res) => {
  try {
    console.log("we are in gettask controllers");
    const response = await Test.find();
    // console.log(response);
    if (response) {
      return res
        .status(200)
        .json({ message: "task data fetched successfully", data: response });
    } else {
      return res.status(500).json({ message: "something went wrong.!" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "error while fetching data from database" });
  }
};

module.exports = {
  addtask,
  getTask,
};
