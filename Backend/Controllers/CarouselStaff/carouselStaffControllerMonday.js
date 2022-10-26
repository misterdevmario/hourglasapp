const asyncHandler = require("express-async-handler");
const CarouselStaffMonday = require("../../Models/CarouselStaff/carouselStaffSchemaMonday");

const getCarouselStaffMonday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselStaffMonday.find();
  res.status(200).json(getInfo);
});

const createCarouselStaffMonday = asyncHandler(async (req, res) => {
  const { name, phraseEn, phraseEs, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselStaffMonday.create({
    name,
    phraseEn,
    phraseEs,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselStaffMonday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselStaffMonday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselStaffMonday = asyncHandler(async (req, res) => {
  const info = CarouselStaffMonday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselStaffMonday,
  createCarouselStaffMonday,
  updateCarouselStaffMonday,
  deleteCarouselStaffMonday,
};
