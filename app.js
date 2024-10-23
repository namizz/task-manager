const express = require("express");
const app = express();
const routes = require("./routers/tasks");
const path = require("path");
const connectDB = require("./db/connect");
require("dotenv").config();
//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks", routes);

//out of the course
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

const port = 3000;

app.get("/hello", (req, res) => {
  console.log("Task Manager");
  res.send("Hello");
});
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Listening ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
