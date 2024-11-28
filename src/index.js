require("dotenv").config();
const { app } = require("./app");
const { connectDB } = require("./dbconfig/connectdb");

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server is listening at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`error while connecting database ${error}`);
  });
