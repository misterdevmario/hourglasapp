const asyncHandler = require("express-async-handler");
const CarouselSunday = require("../../Models/CarouselActivities/carouselSchemaSunday");

const getCarouselSunday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselSunday.find();
  res.status(200).json(getInfo);
});

const createCarouselSunday = asyncHandler(async (req, res) => {
  const { hours, location, activity, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselSunday.create({
    hours,
    location,
    activity,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselSunday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselSunday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselSunday = asyncHandler(async (req, res) => {
  const info = CarouselSunday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselSunday,
  createCarouselSunday,
  updateCarouselSunday,
  deleteCarouselSunday,
};
