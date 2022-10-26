const mongoose = require("mongoose");

const uploadBarsRestaurantsImageSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    url: String,
    public_id: String,
  },
});

module.exports = mongoose.model("UploadBarsRestaurantsImage", uploadBarsRestaurantsImageSchema);