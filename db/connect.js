const mongoose = require("mongoose");

const connection =
  "mongodb+srv://nami_zz:1234nnamii1234@nodeexpressproject.nu9tw.mongodb.net/";

const connectDB = (url) => {
  return mongoose
    .connect(connection, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }) //something is not clear here
    .then(() => {
      console.log("Connected to db");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
