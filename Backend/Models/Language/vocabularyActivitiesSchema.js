const mongoose = require("mongoose");

const vocabularyActivitiesSchema = mongoose.Schema({
  en: {
    type: String,
    required: true,
  },
  es: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "VocabularyActivities",
  vocabularyActivitiesSchema
);
