const asyncHandler = require("express-async-handler");
const CarouselStaffWednesday = require("../../Models/CarouselStaff/carouselStaffSchemaWednesday");

const getCarouselStaffWednesday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselStaffWednesday.find();
  res.status(200).json(getInfo);
});

const createCarouselStaffWednesday = asyncHandler(async (req, res) => {
  const { name, phrase, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselStaffWednesday.create({
    name,
    phrase,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselStaffWednesday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselStaffWednesday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselStaffWednesday = asyncHandler(async (req, res) => {
  const info = CarouselStaffSaWednesday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselStaffWednesday,
  createCarouselStaffWednesday,
  updateCarouselStaffWednesday,
  deleteCarouselStaffWednesday,
};

