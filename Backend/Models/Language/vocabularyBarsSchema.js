
const mongoose = require("mongoose");

const vocabularyBarsSchema = mongoose.Schema({
  en: {
    type: String,
    required: true,
  },
  es: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("VocabularyBars", vocabularyBarsSchema);