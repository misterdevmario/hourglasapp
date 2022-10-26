const asyncHandler = require("express-async-handler");
const CarouselStaffSaturday = require("../../Models/CarouselStaff/carouselStaffSchemaSaturday");

const getCarouselStaffSaturday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselStaffSaturday.find();
  res.status(200).json(getInfo);
});

const createCarouselStaffSaturday = asyncHandler(async (req, res) => {
  const { name, phraseEn, phraseEs, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselStaffSaturday.create({
    name,
    phraseEn,
    phraseEs,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselStaffSaturday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselStaffSaturday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselStaffSaturday = asyncHandler(async (req, res) => {
  const info = CarouselStaffSaturday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselStaffSaturday,
  createCarouselStaffSaturday,
  updateCarouselStaffSaturday,
  deleteCarouselStaffSaturday,
};
