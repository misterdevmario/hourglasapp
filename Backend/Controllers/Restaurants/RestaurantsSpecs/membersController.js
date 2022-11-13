const asyncHandler = require("express-async-handler");
const Members = require("../../../Models/Restaurants/RestaurantsSpecs/membersSchema");

const getMembers = asyncHandler(async (req, res) => {
  const getWords = await Members.find();
  res.status(200).json(getWords);
});

const addMembers = asyncHandler(async(req,res)=>{
    const {en, es} =req.body
    if (!req.body) {
        throw new Error("Please fill all inputs/ Favor de llenar todos los campos");
      }
      
  const wordExistsEs = await Members.findOne({ es });
  const wordExistsEn = await Members.findOne({ en });

  if (wordExistsEs || wordExistsEn) {
    res.status(400);
    throw new Error("Word already exists/La palabra ya existe");
  }

  const addWord = await Members.create({en, es})
  res.status(200).json(addWord)
})


const deleteMembers = asyncHandler(async (req, res) => {
    const info = Members.findById(req.params.id);
    if (!info) {
      res.status(400);
      throw new Error("Not found");
    }
    await info.deleteOne();
    res.status(200).json({ id: req.params.id });
  });

module.exports = { getMembers, addMembers, deleteMembers };

