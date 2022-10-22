const asyncHandler = require("express-async-handler");
const RestaurantsSunday = require("../../Models/Restaurants/restaurantSchemaSunday");

const getRestaurantsSunday = asyncHandler(async (req, res) => {
  const getInfo = await RestaurantsSunday.find();
  res.status(200).json(getInfo);
});

const createRestaurantsSunday = asyncHandler(async (req, res) => {
  const { name, type, opening, closing, members, image, service } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addRestaurantsItem = await RestaurantsSunday.create({
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

const updateRestaurantsSunday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await RestaurantsSunday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteRestaurantsSunday = asyncHandler(async (req, res) => {
  const info = RestaurantsSunday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getRestaurantsSunday,
  createRestaurantsSunday,
  updateRestaurantsSunday,
  deleteRestaurantsSunday,
};
