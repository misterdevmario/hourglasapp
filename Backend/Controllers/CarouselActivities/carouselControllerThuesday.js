const asyncHandler = require("express-async-handler");
const carouselThuesdaySchema = require("../../Models/CarouselActivities/carouselSchemaThuesday");

const getCarouselThuesday = asyncHandler(async (req, res) => {
  const getInfo = await carouselThuesdaySchema.find();
  res.status(200).json(getInfo);
});

const getOneCarouselThuesday = asyncHandler(async(req,res) => {
  const getOneInfo = await carouselThuesdaySchema.findById(req.params.id)
  res.status(200).json(getOneInfo)
})

const createCarouselThuesday = asyncHandler(async (req, res) => {
  const { hours, locationEn, locationEs, activityEn, activityEs, image } =
    req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await carouselThuesdaySchema.create({
    hours,
    locationEn,
    locationEs,
    activityEn,
    activityEs,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselThuesday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await carouselThuesdaySchema.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselThuesday = asyncHandler(async (req, res) => {
  const info = carouselThuesdaySchema.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselThuesday,
  createCarouselThuesday,
  updateCarouselThuesday,
  deleteCarouselThuesday,
  getOneCarouselThuesday
};
