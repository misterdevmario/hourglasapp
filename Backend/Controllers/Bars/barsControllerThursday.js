const asyncHandler = require("express-async-handler");
const BarsThursday = require("../../Models/Bars/barsSchemaThursday");

const getBarsThursday = asyncHandler(async (req, res) => {
  const getInfo = await BarsThursday.find();
  res.status(200).json(getInfo);
});

const createBarsThursday = asyncHandler(async (req, res) => {
  const { name, opening, closing, image} = req.body;
  if (!req.body) {
    throw new Error("Please fill all inputs");
  }

  const addBarsItem = await BarsThursday.create({
    name,
    opening,
    closing,
    image,
  });
  res.status(200).json(addBarsItem);
});


const updateBarsThursday = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Not found");
  }

  const infoUpdated = await BarsThursday.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(infoUpdated);
});

const deleteBarsThursday = asyncHandler(async (req, res) => {
  const info = BarsThursday.findById(req.params.id);
  if (!info) {
    res.status(400);
    throw new Error("Not found");
  }
  await info.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getBarsThursday,
  createBarsThursday,
  updateBarsThursday,
  deleteBarsThursday,
};
