const asyncHandler = require("express-async-handler");
const CarouselMonday = require("../../Models/CarouselActivities/carouselSchemaMonday");

const getCarouselMonday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselMonday.find();
  res.status(200).json(getInfo);
});

const createCarouselMonday = asyncHandler(async (req, res) => {
  const { hours, location, activity, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselMonday.create({
    hours,
    location,
    activity,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselMonday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselMonday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselMonday = asyncHandler(async (req, res) => {
  const info = CarouselMonday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselMonday,
  createCarouselMonday,
  updateCarouselMonday,
  deleteCarouselMonday,
};
