const asyncHandler = require("express-async-handler");
const BarsSaturday = require("../../Models/Bars/barsSchemaSaturday");

const getBarsSaturday = asyncHandler(async (req, res) => {
  const getInfo = await BarsSaturday.find();
  res.status(200).json(getInfo);
});

const createBarsSaturday = asyncHandler(async (req, res) => {
  const { name, opening, closing, image} = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addBarsItem = await BarsSaturday.create({
    name,
    opening,
    closing,
    image,
  });
  res.status(200).json(addBarsItem);
});


const updateBarsSaturday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await BarsSaturday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteBarsSaturday = asyncHandler(async (req, res) => {
  const info = BarsSaturday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBarsSaturday,
  createBarsSaturday,
  updateBarsSaturday,
  deleteBarsSaturday,
};
