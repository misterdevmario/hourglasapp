const asyncHandler = require("express-async-handler");
const VocabularyRestaurants = require("../../Models/Language/vocabularyRestaurantsSchema");

const getRestaurantsVocabulary = asyncHandler(async (req, res) => {
  const getWords = await VocabularyRestaurants.find();
  res.status(200).json(getWords);
});

const addRestaurantsVocabulary = asyncHandler(async(req,res)=>{
    const {en, es} =req.body
    if (!req.body) {
        throw new Error("Please fill all inputs/ Favor de llenar todos los campos");
      }
      
  const wordExistsEs = await VocabularyRestaurants.findOne({ es });
  const wordExistsEn = await VocabularyRestaurants.findOne({ en });

  if (wordExistsEs || wordExistsEn) {
    res.status(400);
    throw new Error("Word already exists/La palabra ya existe");
  }

  const addWord = await VocabularyRestaurants.create({en, es})
  res.status(200).json(addWord)
})


const deleteRestaurantsVocabularyWord = asyncHandler(async (req, res) => {
    const info = VocabularyRestaurants.findById(req.params.id);
    if (!info) {
      res.status(400);
      throw new Error("Not found");
    }
    await info.deleteOne();
    res.status(200).json({ id: req.params.id });
  });

module.exports = { getRestaurantsVocabulary, addRestaurantsVocabulary, deleteRestaurantsVocabularyWord };
