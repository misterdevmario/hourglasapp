const mongoose = require("mongoose");

const carouselStaffSchemaSunday = mongoose.Schema({
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
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "CarouselStaffSunday",
  carouselStaffSchemaSunday
);
