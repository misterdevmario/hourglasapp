const asyncHandler = require("express-async-handler");
const CarouselStaff = require("../../Models/CarouselStaff/carouselStaffSchema");

const getCarouselStaff = asyncHandler(async (req, res) => {
  const getInfo = await CarouselStaff.find();
  res.status(200).json(getInfo);
});

const createCarouselStaff = asyncHandler(async (req, res) => {
  const { name, phraseEn, phraseEs, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselStaff.create({
    name,
    phraseEn,
    phraseEs,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselStaff = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselStaff.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselStaff = asyncHandler(async (req, res) => {
  const info = CarouselStaff.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselStaff,
  createCarouselStaff,
  updateCarouselStaff,
  deleteCarouselStaff,
};