const mongoose = require("mongoose");

const carouselFlyerSchemaFriday = mongoose.Schema({
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
  "CarouselFlyerFriday",
  carouselFlyerSchemaFriday
);
