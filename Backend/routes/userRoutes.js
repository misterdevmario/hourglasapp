const express = require("express");
const usersRouter = express.Router();
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../Controllers/Users/usersController");
//const { protect } = require("../Middlewares/authMiddleware");

usersRouter.get("/users", getUsers);
usersRouter.post("/users/register", createUser);
usersRouter.post("/users/login", loginUser);
usersRouter.route("/users/:id").put(updateUser).delete(deleteUser);

module.exports = usersRouter;
