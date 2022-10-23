const asyncHandler = require("express-async-handler");
const CarouselFlyerThursday = require("../../Models/CarouselFlyer/carouselFlyerSchemaThursday");

const getCarouselFlyerThursday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselFlyerThursday.find();
  res.status(200).json(getInfo);
});

const createCarouselFlyerThursday = asyncHandler(async (req, res) => {
  const { name, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselFlyerThursday.create({
    name,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselFlyerThursday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselFlyerThursday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselFlyerThursday = asyncHandler(async (req, res) => {
  const info = CarouselFlyerThursday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselFlyerThursday,
  createCarouselFlyerThursday,
  updateCarouselFlyerThursday,
  deleteCarouselFlyerThursday,
};
  
