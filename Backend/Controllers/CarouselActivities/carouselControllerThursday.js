const asyncHandler = require("express-async-handler");
const CarouselThursday = require("../../Models/CarouselActivities/carouselSchemaThursday");

const getCarouselThursday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselThursday.find();
  res.status(200).json(getInfo);
});

const getOneCarouselThursday = asyncHandler(async(req,res) => {
  const getOneInfo = await CarouselThursday.findById(req.params.id)
  res.status(200).json(getOneInfo)
})

const createCarouselThursday = asyncHandler(async (req, res) => {
  const { hours, locationEn, locationEs, activityEn, activityEs, image } =
    req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselThursday.create({
    hours,
    locationEn,
    locationEs,
    activityEn,
    activityEs,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselThursday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselThursday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselThursday = asyncHandler(async (req, res) => {
  const info = CarouselThursday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselThursday,
  createCarouselThursday,
  updateCarouselThursday,
  deleteCarouselThursday,
  getOneCarouselThursday
};
