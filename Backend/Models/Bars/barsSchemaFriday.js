const mongoose = require("mongoose");

const barsSchemaFriday = mongoose.Schema({
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

module.exports = mongoose.model("BarsFriday", barsSchemaFriday);
