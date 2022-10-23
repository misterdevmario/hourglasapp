const asyncHandler = require("express-async-handler");
const CarouselStaffThuesday = require("../../Models/CarouselStaff/carouselStaffSchemaThuesday");

const getCarouselStaffThuesday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselStaffThuesday.find();
  res.status(200).json(getInfo);
});

const createCarouselStaffThuesday = asyncHandler(async (req, res) => {
  const { name, phrase, image } = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselStaffThuesday.create({
    name,
    phrase,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselStaffThuesday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselStaffThuesday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselStaffThuesday = asyncHandler(async (req, res) => {
  const info = CarouselStaffSaThuesday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselStaffThuesday,
  createCarouselStaffThuesday,
  updateCarouselStaffThuesday,
  deleteCarouselStaffThuesday,
};

