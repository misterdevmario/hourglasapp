const mongoose = require("mongoose");

const carouselFlyerSchemaThuesday = mongoose.Schema({
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
  "CarouselFlyerThuesday",
  carouselFlyerSchemaThuesday
);
