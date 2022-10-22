const asyncHandler = require("express-async-handler");
const BarsMonday = require("../../Models/Bars/barsSchemaMonday");

const getBarsMonday = asyncHandler(async (req, res) => {
  const getInfo = await BarsMonday.find();
  res.status(200).json(getInfo);
});

const createBarsMonday = asyncHandler(async (req, res) => {
  const { name, opening, closing, image} = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addBarsItem = await BarsMonday.create({
    name,
    opening,
    closing,
    image,
  });
  res.status(200).json(addBarsItem);
});


const updateBarsMonday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await BarsMonday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteBarsMonday = asyncHandler(async (req, res) => {
  const info = BarsMonday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBarsMonday,
  createBarsMonday,
  updateBarsMonday,
  deleteBarsMonday,
};
