const mongoose = require("mongoose");

const carouselSchema = mongoose.Schema({
  hours: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  image: {
    type: String
  },
});

module.exports = mongoose.model("Carousel", carouselSchema);
