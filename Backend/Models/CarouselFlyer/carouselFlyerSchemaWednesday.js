const mongoose = require("mongoose");

const carouselFlyerSchemaWednesday = mongoose.Schema({
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
  "CarouselFlyerWednesday",
  carouselFlyerSchemaWednesday
);
