const mongoose = require("mongoose");

const restaurantsSpecsSchema = mongoose.Schema({

  type: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },

  members: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("RestaurantsSpecs", restaurantsSpecsSchema);
