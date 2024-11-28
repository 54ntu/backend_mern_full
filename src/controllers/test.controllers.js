const { Test } = require("../models/test.models");

const addtask = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "title is required...!!!" });
  }

  try {
    const response = await Test.create({ title });
    if (response.status === 200) {
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

module.exports = {
  addtask,
};
