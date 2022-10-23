const mongoose = require("mongoose");

const carouselFlyerSchemaMonday = mongoose.Schema({
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
  "CarouselFlyerMonday",
  carouselFlyerSchemaMonday
);
