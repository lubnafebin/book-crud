const mongoose = require("mongoose");
const connect = async () => {
  await mongoose
    .connect(process.env.MONGO_URI, {})
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB ");
    });
};
module.exports = connect;
