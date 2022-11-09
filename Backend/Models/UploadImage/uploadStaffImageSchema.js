const mongoose = require("mongoose");

const uploadStaffImageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phraseEn: {
    type: String,
    required: true,
  },
  phraseEs: {
    type: String,
    required: true,
  },

  image: {
    url: String,
    public_id: String,
  },
});

module.exports = mongoose.model("UploadStaffImage", uploadStaffImageSchema);
