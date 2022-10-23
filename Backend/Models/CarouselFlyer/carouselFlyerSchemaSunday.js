const mongoose = require("mongoose");

const carouselFlyerSchemaSunday = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "CarouselFlyerSunday",
  carouselFlyerSchemaSunday
);
