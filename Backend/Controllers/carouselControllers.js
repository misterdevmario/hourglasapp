const asyncHandler = require("express-async-handler");
const Carousel = require("../Models/carouselSchema");

const getCarouselInfo = asyncHandler(async (req, res) => {
  const getInfo = await Carousel.find();
  res.status(200).json(getInfo);
});

const createCarouselInfo = asyncHandler(async (req, res) => {
  const { hours, location, activity, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await Carousel.create({
    hours,
    location,
    activity,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselInfo = asyncHandler(async (req, res) => {
  const info = await Carousel.findById(req.params.id);
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await Carousel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselInfo = asyncHandler(async (req, res) => {
  const info = Carousel.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselInfo,
  createCarouselInfo,
  updateCarouselInfo,
  deleteCarouselInfo,
};
