const asyncHandler = require("express-async-handler");
const RestaurantsSaturday = require("../../Models/Restaurants/restaurantSchemaSaturday");

const getRestaurantsSaturday = asyncHandler(async (req, res) => {
  const getInfo = await RestaurantsSaturday.find();
  res.status(200).json(getInfo);
});

const createRestaurantsSaturday = asyncHandler(async (req, res) => {
  const { name, type, opening, closing, members, image, service } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addRestaurantsItem = await RestaurantsSaturday.create({
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

const updateRestaurantsSaturday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await RestaurantsSaturday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteRestaurantsSaturday = asyncHandler(async (req, res) => {
  const info = RestaurantsSaturday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getRestaurantsSaturday,
  createRestaurantsSaturday,
  updateRestaurantsSaturday,
  deleteRestaurantsSaturday,
};
