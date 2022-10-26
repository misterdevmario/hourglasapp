const asyncHandler = require("express-async-handler");
const User = require("../../Models/Users/usersModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const getUsers = asyncHandler(async (req, res) => {
  const getInfo = await User.find();
  res.status(200).json(getInfo);
});

const loginUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials/Credenciales invalidas");
  }
});

const createUser = asyncHandler(async (req, res) => {
  const { name, password, admin } = req.body;
  if (!name || !password || !admin) {
    res.status(400);
    throw new Error(
      "Please fill all inputs/ Favor de llenar todos los espacios"
    );
  }

  const userExists = await User.findOne({ name });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists/El usuario ya existe");
  }

  const salt = await bcrypt.genSalt(6);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    password: hashedPassword,
    admin,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data/Datos del usuario invalidos");
  }
});

const updateUser = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(infoUpdated);
});

const deleteUser = asyncHandler(async (req, res) => {
  const info = User.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

//GENERATE TOKEN

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  getUsers,
  loginUser,
  createUser,
  updateUser,
  deleteUser,
};
