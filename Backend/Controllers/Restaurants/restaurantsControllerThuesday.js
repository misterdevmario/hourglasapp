const asyncHandler = require("express-async-handler");
const RestaurantsThuesday = require("../../Models/Restaurants/restaurantSchemaThuesday");

const getRestaurantsThuesday = asyncHandler(async (req, res) => {
  const getInfo = await RestaurantsThuesday.find();
  res.status(200).json(getInfo);
});

const createRestaurantsThuesday = asyncHandler(async (req, res) => {
  const { name, type, opening, closing, members, image, service } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addRestaurantsItem = await RestaurantsThuesday.create({
    name,
    type,
    opening,
    closing,
    members,
    image,
    service
  });
  res.status(200).json(addRestaurantsItem);
});

const updateRestaurantsThuesday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await RestaurantsThuesday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteRestaurantsThuesday = asyncHandler(async (req, res) => {
  const info = RestaurantsThuesday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getRestaurantsThuesday,
  createRestaurantsThuesday,
  updateRestaurantsThuesday,
  deleteRestaurantsThuesday,
};
