const mongoose = require("mongoose");

const carouselFlyerSchemaSaturday = mongoose.Schema({
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
  "CarouselFlyerSaturday",
  carouselFlyerSchemaSaturday
);
