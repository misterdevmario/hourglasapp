const asyncHandler = require("express-async-handler");
const RestaurantsFriday = require("../../Models/Restaurants/restaurantSchemaFriday");

const getRestaurantsFriday = asyncHandler(async (req, res) => {
  const getInfo = await RestaurantsFriday.find();
  res.status(200).json(getInfo);
});

const createRestaurantsFriday = asyncHandler(async (req, res) => {
  const { name, type, opening, closing, members, image,service } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addRestaurantsItem = await RestaurantsFriday.create({
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

const updateRestaurantsFriday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await RestaurantsFriday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteRestaurantsFriday = asyncHandler(async (req, res) => {
  const info = RestaurantsFriday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getRestaurantsFriday,
  createRestaurantsFriday,
  updateRestaurantsFriday,
  deleteRestaurantsFriday,
};
