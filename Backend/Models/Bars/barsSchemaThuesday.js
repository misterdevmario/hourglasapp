const mongoose = require("mongoose");

const barsSchemaThuesday = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  opening: {
    type: String,
    required: true,
  },
  closing: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("BarsThuesday", barsSchemaThuesday);
