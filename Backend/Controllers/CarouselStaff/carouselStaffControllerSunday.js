const asyncHandler = require("express-async-handler");
const CarouselStaffSunday = require("../../Models/CarouselStaff/carouselStaffSchemaSunday");

const getCarouselStaffSunday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselStaffSunday.find();
  res.status(200).json(getInfo);
});

const createCarouselStaffSunday = asyncHandler(async (req, res) => {
  const { name, phrase, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselStaffSunday.create({
    name,
    phrase,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselStaffSunday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselStaffSunday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselStaffSunday = asyncHandler(async (req, res) => {
  const info = CarouselStaffSaturday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselStaffSunday,
  createCarouselStaffSunday,
  updateCarouselStaffSunday,
  deleteCarouselStaffSunday,
};

