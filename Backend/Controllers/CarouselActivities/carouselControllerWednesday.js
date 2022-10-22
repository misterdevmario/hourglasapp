const asyncHandler = require("express-async-handler");
const CarouselWednesday = require("../../Models/CarouselActivities/carouselSchemaWednesday");

const getCarouselWednesday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselWednesday.find();
  res.status(200).json(getInfo);
});

const createCarouselWednesday = asyncHandler(async (req, res) => {
  const { hours, location, activity, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselWednesday.create({
    hours,
    location,
    activity,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselWednesday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselWednesday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselWednesday = asyncHandler(async (req, res) => {
  const info = CarouselWednesday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselWednesday,
  createCarouselWednesday,
  updateCarouselWednesday,
  deleteCarouselWednesday,
};
