const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DB_NAME}`
    );
    if (connectionInstance) {
      console.log("database connected successfully..");
    }
  } catch (error) {
    console.log(`something went wrong lol ${error}`);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
};
