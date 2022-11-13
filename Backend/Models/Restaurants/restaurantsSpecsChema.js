const mongoose = require("mongoose");

const restaurantsSpecsSchema = mongoose.Schema({

  typeEn: {
    type: String,
    required: true,
  },
  serviceEn: {
    type: String,
    required: true,
  },

  membersEn: {
    type: String,
    required: true,
  },
  typeEs: {
    type: String,
    required: true,
  },
  serviceEs: {
    type: String,
    required: true,
  },

  membersEs: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RestaurantsSpecs", restaurantsSpecsSchema);
