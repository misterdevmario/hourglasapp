const asyncHandler = require("express-async-handler");
const CarouselStaffFriday = require("../../Models/CarouselStaff/carouselStaffSchemaFriday");

const getCarouselStaffFriday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselStaffFriday.find();
  res.status(200).json(getInfo);
});

const createCarouselStaffFriday = asyncHandler(async (req, res) => {
  const { name, phraseEn, phraseEs, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselStaffFriday.create({
    name,
    phraseEn,
    phraseEs,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselStaffFriday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselStaffFriday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselStaffFriday = asyncHandler(async (req, res) => {
  const info = CarouselStaffFriday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselStaffFriday,
  createCarouselStaffFriday,
  updateCarouselStaffFriday,
  deleteCarouselStaffFriday,
};
