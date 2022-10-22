const asyncHandler = require("express-async-handler");
const BarsFriday = require("../../Models/Bars/barsSchemaFriday");

const getBarsFriday = asyncHandler(async (req, res) => {
  const getInfo = await BarsFriday.find();
  res.status(200).json(getInfo);
});

const createBarsFriday = asyncHandler(async (req, res) => {
  const { name, opening, closing, image} = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addBarsItem = await BarsFriday.create({
    name,
    opening,
    closing,
    image,
  });
  res.status(200).json(addBarsItem);
});


const updateBarsFriday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await BarsFriday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteBarsFriday = asyncHandler(async (req, res) => {
  const info = BarsFriday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBarsFriday,
  createBarsFriday,
  updateBarsFriday,
  deleteBarsFriday,
};
