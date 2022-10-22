const asyncHandler = require("express-async-handler");
const RestaurantsWednesday = require("../../Models/Restaurants/restaurantSchemaWednesday");

const getRestaurantsWednesday = asyncHandler(async (req, res) => {
  const getInfo = await RestaurantsWednesday.find();
  res.status(200).json(getInfo);
});

const createRestaurantsWednesday = asyncHandler(async (req, res) => {
  const { name, type, opening, closing, members, image,service } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addRestaurantsItem = await RestaurantsWednesday.create({
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

const updateRestaurantsWednesday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await RestaurantsWednesday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteRestaurantsWednesday = asyncHandler(async (req, res) => {
  const info = RestaurantsWednesday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getRestaurantsWednesday,
  createRestaurantsWednesday,
  updateRestaurantsWednesday,
  deleteRestaurantsWednesday,
};
