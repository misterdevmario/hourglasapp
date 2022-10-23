const asyncHandler = require("express-async-handler");
const CarouselFlyerThuesday = require("../../Models/CarouselFlyer/carouselFlyerSchemaThuesday");

const getCarouselFlyerThuesday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselFlyerThuesday.find();
  res.status(200).json(getInfo);
});

const createCarouselFlyerThuesday = asyncHandler(async (req, res) => {
  const { name, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselFlyerThuesday.create({
    name,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselFlyerThuesday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselFlyerThuesday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselFlyerThuesday = asyncHandler(async (req, res) => {
  const info = CarouselFlyerThuesday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselFlyerThuesday,
  createCarouselFlyerThuesday,
  updateCarouselFlyerThuesday,
  deleteCarouselFlyerThuesday,
};
  
