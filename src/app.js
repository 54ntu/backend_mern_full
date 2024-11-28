const express = require("express");
const cors = require("cors");
const { Router } = require("./routes/test.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use("/api/v1", Router);

module.exports = {
  app,
};
