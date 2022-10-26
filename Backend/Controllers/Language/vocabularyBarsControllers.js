const asyncHandler = require("express-async-handler");
const VocabularyBars = require("../../Models/Language/vocabularyBarsSchema");

const getBarsVocabulary = asyncHandler(async (req, res) => {
  const getWords = await VocabularyBars.find();
  res.status(200).json(getWords);
});

const addBarsVocabulary = asyncHandler(async(req,res)=>{
    const {en, es} =req.body
    if (!req.body) {
        throw new Error("Please fill all inputs/ Favor de llenar todos los campos");
      }
      
  const wordExistsEs = await VocabularyBars.findOne({ es });
  const wordExistsEn = await VocabularyBars.findOne({ en });

  if (wordExistsEs || wordExistsEn) {
    res.status(400);
    throw new Error("Word already exists/La palabra ya existe");
  }

  const addWord = await VocabularyBars.create({en, es})
  res.status(200).json(addWord)
})


const deleteBarsVocabularyWord = asyncHandler(async (req, res) => {
    const info = VocabularyBars.findById(req.params.id);
    if (!info) {
      res.status(400);
      throw new Error("Not found");
    }
    await info.deleteOne();
    res.status(200).json({ id: req.params.id });
  });

module.exports = { getBarsVocabulary, addBarsVocabulary, deleteBarsVocabularyWord };
