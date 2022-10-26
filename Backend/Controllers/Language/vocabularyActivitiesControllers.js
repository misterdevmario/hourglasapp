const asyncHandler = require("express-async-handler");
const VocabularyActivities = require("../../Models/Language/vocabularyActivitiesSchema");

const getVocabulary = asyncHandler(async (req, res) => {
  const getWords = await VocabularyActivities.find();
  res.status(200).json(getWords);
});

const addVocabulary = asyncHandler(async(req,res)=>{
    const {en, es} =req.body
    if (!req.body) {
        throw new Error("Please fill all inputs/ Favor de llenar todos los campos");
      }
      
  const wordExistsEs = await VocabularyActivities.findOne({ es });
  const wordExistsEn = await VocabularyActivities.findOne({ en });

  if (wordExistsEs || wordExistsEn) {
    res.status(400);
    throw new Error("Word already exists/La palabra ya existe");
  }

  const addWord = await VocabularyActivities.create({en, es})
  res.status(200).json(addWord)
})


const deleteVocabularyWord = asyncHandler(async (req, res) => {
    const info = VocabularyActivities.findById(req.params.id);
    if (!info) {
      res.status(400);
      throw new Error("Not found");
    }
    await info.deleteOne();
    res.status(200).json({ id: req.params.id });
  });

module.exports = { getVocabulary, addVocabulary, deleteVocabularyWord };
