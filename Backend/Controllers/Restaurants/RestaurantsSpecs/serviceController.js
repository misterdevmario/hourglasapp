const asyncHandler = require("express-async-handler");
const Service = require("../../../Models/Restaurants/RestaurantsSpecs/serviceSchema");

const getService = asyncHandler(async (req, res) => {
  const getWords = await Service.find();
  res.status(200).json(getWords);
});

const addService = asyncHandler(async(req,res)=>{
    const {en, es} =req.body
    if (!req.body) {
        throw new Error("Please fill all inputs/ Favor de llenar todos los campos");
      }
      
  const wordExistsEs = await Service.findOne({ es });
  const wordExistsEn = await Service.findOne({ en });

  if (wordExistsEs || wordExistsEn) {
    res.status(400);
    throw new Error("Word already exists/La palabra ya existe");
  }

  const addWord = await Service.create({en, es})
  res.status(200).json(addWord)
})


const deleteService = asyncHandler(async (req, res) => {
    const info = Service.findById(req.params.id);
    if (!info) {
      res.status(400);
      throw new Error("Not found");
    }
    await info.deleteOne();
    res.status(200).json({ id: req.params.id });
  });

module.exports = { getService, addService, deleteService };

