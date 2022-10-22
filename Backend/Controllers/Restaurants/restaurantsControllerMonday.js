const asyncHandler = require("express-async-handler");
const RestaurantsMonday = require("../../Models/Restaurants/restaurantsSchemaMonday");

const getRestaurantsMonday = asyncHandler(async (req, res) => {
  const getInfo = await RestaurantsMonday.find();
  res.status(200).json(getInfo);
});

const createRestaurantsMonday = asyncHandler(async (req, res) => {
  const { name, type, opening, closing, members, image, service } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addRestaurantsItem = await RestaurantsMonday.create({
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

const updateRestaurantsMonday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await RestaurantsMonday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteRestaurantsMonday = asyncHandler(async (req, res) => {
  const info = RestaurantsMonday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getRestaurantsMonday,
  createRestaurantsMonday,
  updateRestaurantsMonday,
  deleteRestaurantsMonday,
};
