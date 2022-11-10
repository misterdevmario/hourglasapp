const mongoose = require("mongoose");

const uploadImageSchema = mongoose.Schema({
  en: {
    type: String,
    required: true,
  },
  es: {
    type: String,
    required: true,
  },
  image: {
    url: String,
    public_id: String,
  },
});

module.exports = mongoose.model("UploadImage", uploadImageSchema);
