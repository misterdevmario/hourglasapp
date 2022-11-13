const mongoose = require("mongoose");

const typeSchema = mongoose.Schema({
  en: {
    type: String,
    required: true,
  },
  es: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Type", typeSchema);