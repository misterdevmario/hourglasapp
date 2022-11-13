const asyncHandler = require("express-async-handler");
const Type = require("../../../Models/Restaurants/RestaurantsSpecs/typeSchema");

const getType = asyncHandler(async (req, res) => {
  const getWords = await Type.find();
  res.status(200).json(getWords);
});

const addType = asyncHandler(async(req,res)=>{
    const {en, es} =req.body
    if (!req.body) {
        throw new Error("Please fill all inputs/ Favor de llenar todos los campos");
      }
      
  const wordExistsEs = await Type.findOne({ es });
  const wordExistsEn = await Type.findOne({ en });

  if (wordExistsEs || wordExistsEn) {
    res.status(400);
    throw new Error("Word already exists/La palabra ya existe");
  }

  const addWord = await Type.create({en, es})
  res.status(200).json(addWord)
})


const deleteType = asyncHandler(async (req, res) => {
    const info = Type.findById(req.params.id);
    if (!info) {
      res.status(400);
      throw new Error("Not found");
    }
    await info.deleteOne();
    res.status(200).json({ id: req.params.id });
  });

module.exports = { getType, addType, deleteType };

