const asyncHandler = require("express-async-handler");
const CarouselFlyerWednesday = require("../../Models/CarouselFlyer/carouselFlyerSchemaWednesday");

const getCarouselFlyerWednesday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselFlyerWednesday.find();
  res.status(200).json(getInfo);
});

const createCarouselFlyerWednesday = asyncHandler(async (req, res) => {
  const { name, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselFlyerWednesday.create({
    name,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselFlyerWednesday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselFlyerWednesday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselFlyerWednesday = asyncHandler(async (req, res) => {
  const info = CarouselFlyerWednesday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselFlyerWednesday,
  createCarouselFlyerWednesday,
  updateCarouselFlyerWednesday,
  deleteCarouselFlyerWednesday,
};
  
