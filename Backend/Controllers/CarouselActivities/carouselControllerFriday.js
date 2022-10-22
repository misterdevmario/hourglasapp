const asyncHandler = require("express-async-handler");
const CarouselFriday = require("../../Models/CarouselActivities/carouselSchemaFriday");

const getCarouselFriday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselFriday.find();
  res.status(200).json(getInfo);
});

const createCarouselFriday = asyncHandler(async (req, res) => {
  const { hours, location, activity, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselFriday.create({
    hours,
    location,
    activity,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselFriday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselFriday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselFriday = asyncHandler(async (req, res) => {
  const info = CarouselFriday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselFriday,
  createCarouselFriday,
  updateCarouselFriday,
  deleteCarouselFriday,
};
