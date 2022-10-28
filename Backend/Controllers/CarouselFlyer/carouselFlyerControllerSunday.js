const asyncHandler = require("express-async-handler");
const CarouselFlyerSunday = require("../../Models/CarouselFlyer/carouselFlyerSchemaSunday");

const getCarouselFlyerSunday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselFlyerSunday.find();
  res.status(200).json(getInfo);
});

const createCarouselFlyerSunday = asyncHandler(async (req, res) => {
  const { name, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselFlyerSunday.create({
    name,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselFlyerSunday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselFlyerSunday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselFlyerSunday = asyncHandler(async (req, res) => {
  const info = CarouselFlyerSunday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselFlyerSunday,
  createCarouselFlyerSunday,
  updateCarouselFlyerSunday,
  deleteCarouselFlyerSunday,
};
  