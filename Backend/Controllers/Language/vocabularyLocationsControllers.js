const asyncHandler = require("express-async-handler");
const VocabularyLocations = require("../../Models/Language/vocabularyLocationsSchema");

const getLocationsVocabulary = asyncHandler(async (req, res) => {
  const getWords = await VocabularyLocations.find();
  res.status(200).json(getWords);
});

const addLocationsVocabulary = asyncHandler(async(req,res)=>{
    const {en, es} =req.body
    if (!req.body) {
        throw new Error("Please fill all inputs/ Favor de llenar todos los campos");
      }
      
  const wordExistsEs = await VocabularyLocations.findOne({ es });
  const wordExistsEn = await VocabularyLocations.findOne({ en });

  if (wordExistsEs || wordExistsEn) {
    res.status(400);
    throw new Error("Word already exists/La palabra ya existe");
  }

  const addWord = await VocabularyLocations.create({en, es})
  res.status(200).json(addWord)
})


const deleteLocationsVocabularyWord = asyncHandler(async (req, res) => {
    const info = VocabularyLocations.findById(req.params.id);
    if (!info) {
      res.status(400);
      throw new Error("Not found");
    }
    await info.deleteOne();
    res.status(200).json({ id: req.params.id });
  });

module.exports = { getLocationsVocabulary, addLocationsVocabulary, deleteLocationsVocabularyWord };

