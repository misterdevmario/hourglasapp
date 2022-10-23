const asyncHandler = require("express-async-handler");
const CarouselFlyerMonday = require("../../Models/CarouselFlyer/carouselFlyerSchemaMonday");

const getCarouselFlyerMonday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselFlyerMonday.find();
  res.status(200).json(getInfo);
});

const createCarouselFlyerMonday = asyncHandler(async (req, res) => {
  const { name, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselFlyerMonday.create({
    name,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselFlyerMonday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselFlyerMonday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselFlyerMonday = asyncHandler(async (req, res) => {
  const info = CarouselFlyerMonday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselFlyerMonday,
  createCarouselFlyerMonday,
  updateCarouselFlyerMonday,
  deleteCarouselFlyerMonday,
};
  
