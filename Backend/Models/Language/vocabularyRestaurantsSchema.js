const mongoose = require('mongoose')


const vocabularyRestaurantsSchema = mongoose.Schema({
  en: {
    type: String,
    required: true,
  },
  es: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("VocabularyRestaurants", vocabularyRestaurantsSchema);