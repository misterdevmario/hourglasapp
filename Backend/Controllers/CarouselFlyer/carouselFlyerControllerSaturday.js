const asyncHandler = require("express-async-handler");
const CarouselFlyerSaturday = require("../../Models/CarouselFlyer/carouselFlyerSchemaSaturday");

const getCarouselFlyerSaturday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselFlyerSaturday.find();
  res.status(200).json(getInfo);
});

const createCarouselFlyerSaturday = asyncHandler(async (req, res) => {
  const { name, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselFlyerSaturday.create({
    name,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselFlyerSaturday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselFlyerSaturday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselFlyerSaturday = asyncHandler(async (req, res) => {
  const info = CarouselFlyerSaturday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselFlyerSaturday,
  createCarouselFlyerSaturday,
  updateCarouselFlyerSaturday,
  deleteCarouselFlyerSaturday,
};
  
