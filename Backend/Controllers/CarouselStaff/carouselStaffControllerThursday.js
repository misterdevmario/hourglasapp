const asyncHandler = require("express-async-handler");
const CarouselStaffThursday = require("../../Models/CarouselStaff/carouselStaffSchemaThursday");

const getCarouselStaffThursday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselStaffThursday.find();
  res.status(200).json(getInfo);
});

const createCarouselStaffThursday = asyncHandler(async (req, res) => {
  const { name, phraseEn, phraseEs, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselStaffThursday.create({
    name,
    phraseEn,
    phraseEs,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselStaffThursday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselStaffThursday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselStaffThursday = asyncHandler(async (req, res) => {
  const info = CarouselStaffSaThuesday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselStaffThursday,
  createCarouselStaffThursday,
  updateCarouselStaffThursday,
  deleteCarouselStaffThursday,
};
