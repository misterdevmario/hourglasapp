const asyncHandler = require("express-async-handler");
const RestaurantsThursday = require("../../Models/Restaurants/restaurantSchemaThursday");

const getRestaurantsThursday = asyncHandler(async (req, res) => {
  const getInfo = await RestaurantsThursday.find();
  res.status(200).json(getInfo);
});

const createRestaurantsThursday = asyncHandler(async (req, res) => {
  const { name, type, opening, closing, members, image,service } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addRestaurantsItem = await RestaurantsThursday.create({
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

const updateRestaurantsThursday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await RestaurantsThursday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteRestaurantsThursday = asyncHandler(async (req, res) => {
  const info = RestaurantsThursday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getRestaurantsThursday,
  createRestaurantsThursday,
  updateRestaurantsThursday,
  deleteRestaurantsThursday,
};
