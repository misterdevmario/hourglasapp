const asyncHandler = require("express-async-handler");
const CarouselSaturday = require("../../Models/CarouselActivities/carouselSchemaSaturday");

const getCarouselSaturday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselSaturday.find();
  res.status(200).json(getInfo);
});

const createCarouselSaturday = asyncHandler(async (req, res) => {
  const { hours, location, activity, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselSaturday.create({
    hours,
    location,
    activity,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselSaturday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselSaturday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselSaturday = asyncHandler(async (req, res) => {
  const info = CarouselSaturday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselSaturday,
  createCarouselSaturday,
  updateCarouselSaturday,
  deleteCarouselSaturday,
};
