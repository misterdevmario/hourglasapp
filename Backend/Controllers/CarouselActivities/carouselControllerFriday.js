const asyncHandler = require("express-async-handler");
const CarouselFriday = require("../../Models/CarouselActivities/carouselSchemaFriday");

const getCarouselFriday = asyncHandler(async (req, res) => {
  const getInfo = await CarouselFriday.find();
  res.status(200).json(getInfo);
});

const getOneCarouselFriday = asyncHandler(async(req,res) => {
  const getOneInfo = await CarouselFriday.findById(req.params.id)
  res.status(200).json(getOneInfo)
})

const createCarouselFriday = asyncHandler(async (req, res) => {
  const { hours, locationEn, locationEs, activityEn, activityEs, image } =
    req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addCarouselItem = await CarouselFriday.create({
    hours,
    locationEn,
    locationEs,
    activityEn,
    activityEs,
    image,
  });
  res.status(200).json(addCarouselItem);
});

const updateCarouselFriday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await CarouselFriday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteCarouselFriday = asyncHandler(async (req, res) => {
  const info = CarouselFriday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getCarouselFriday,
  createCarouselFriday,
  updateCarouselFriday,
  deleteCarouselFriday,
  getOneCarouselFriday
};
