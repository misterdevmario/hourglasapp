const asyncHandler = require("express-async-handler");
const RestaurantsSpecs = require("../../Models/Restaurants/restaurantsSpecsChema");

const getRestaurantsSpecs = asyncHandler(async (req, res) => {
  const getInfo = await RestaurantsSpecs.find();
  res.status(200).json(getInfo);
});

const createRestaurantsSpecs = asyncHandler(async (req, res) => {
  const { type, members, service } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addRestaurantsItem = await RestaurantsSpecs.create({type, members, service,});
  res.status(200).json(addRestaurantsItem);
});

const updateRestaurantsSpecs = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await RestaurantsSpecs.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteRestaurantsSpecs = asyncHandler(async (req, res) => {
  const info = RestaurantsSpecs.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getRestaurantsSpecs,
  createRestaurantsSpecs,
  updateRestaurantsSpecs,
  deleteRestaurantsSpecs,
};
