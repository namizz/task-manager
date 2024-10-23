const getAllTasks = (req, res) => {
  res.send("get all Tasks");
};
const createTask = (req, res) => {
  res.send("create task");
};
const deleteTask = (req, res) => {
  res.send("Delete task");
};
const updateTask = (req, res) => {
  res.send("patch task");
};
const getTask = (req, res) => {
  res.send("get task");
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
  getTask,
};
