const asyncHandler = require("express-async-handler");
const BarsSunday = require("../../Models/Bars/barsSchemaSunday");

const getBarsSunday = asyncHandler(async (req, res) => {
  const getInfo = await BarsSunday.find();
  res.status(200).json(getInfo);
});

const createBarsSunday = asyncHandler(async (req, res) => {
  const { name, opening, closing, image} = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addBarsItem = await BarsSunday.create({
    name,
    opening,
    closing,
    image,
  });
  res.status(200).json(addBarsItem);
});


const updateBarsSunday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await BarsSunday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteBarsSunday = asyncHandler(async (req, res) => {
  const info = BarsSunday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBarsSunday,
  createBarsSunday,
  updateBarsSunday,
  deleteBarsSunday,
};
