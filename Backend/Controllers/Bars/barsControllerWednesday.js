const asyncHandler = require("express-async-handler");
const BarsWednesday = require("../../Models/Bars/barsSchemaWednesday");

const getBarsWednesday = asyncHandler(async (req, res) => {
  const getInfo = await BarsThursday.find();
  res.status(200).json(getInfo);
});

const createBarsWednesday = asyncHandler(async (req, res) => {
  const { name, opening, closing, image} = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addBarsItem = await BarsWednesday.create({
    name,
    opening,
    closing,
    image,
  });
  res.status(200).json(addBarsItem);
});


const updateBarsWednesday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await BarsWednesday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteBarsWednesday = asyncHandler(async (req, res) => {
  const info = BarsWednesday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBarsWednesday,
  createBarsWednesday,
  updateBarsWednesday,
  deleteBarsWednesday
}