const asyncHandler = require("express-async-handler");
const CarouselFlyerFriday = require("../../Models/CarouselFlyer/carouselFlyerSchemaFriday");

const getCarouselFlyerFriday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselFlyerFriday.find();
  res.status(200).json(getInfo);
});

const createCarouselFlyerFriday = asyncHandler(async (req, res) => {
  const { name, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselFlyerFriday.create({
    name,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselFlyerFriday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselFlyerFriday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselFlyerFriday = asyncHandler(async (req, res) => {
  const info = CarouselFlyerFriday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselFlyerFriday,
  createCarouselFlyerFriday,
  updateCarouselFlyerFriday,
  deleteCarouselFlyerFriday,
};
  
