const mongoose = require("mongoose");

const vocabularyLocationsSchema = mongoose.Schema({
  en: {
    type: String,
    required: true,
  },
  es: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("VocabularyLocations", vocabularyLocationsSchema);