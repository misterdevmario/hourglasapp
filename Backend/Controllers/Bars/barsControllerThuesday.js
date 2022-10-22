const asyncHandler = require("express-async-handler");
const BarsThuesday = require("../../Models/Bars/barsSchemaThuesday");

const getBarsThuesday = asyncHandler(async (req, res) => {
  const getInfo = await BarsThuesday.find();
  res.status(200).json(getInfo);
});

const createBarsThuesday = asyncHandler(async (req, res) => {
  const { name, opening, closing, image} = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addBarsItem = await BarsThuesday.create({
    name,
    opening,
    closing,
    image,
  });
  res.status(200).json(addBarsItem);
});


const updateBarsThuesday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await BarsThuesday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteBarsThuesday = asyncHandler(async (req, res) => {
  const info = BarsThuesday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBarsThuesday,
  createBarsThuesday,
  updateBarsThuesday,
  deleteBarsThuesday,
};
