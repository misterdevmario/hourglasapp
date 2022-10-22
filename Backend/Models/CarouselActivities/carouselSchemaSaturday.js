const mongoose = require("mongoose");

const carouselSaturdaySchema = mongoose.Schema({
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
    type: String,
    required: true
  },
});

module.exports = mongoose.model("CarouselSaturday", carouselSaturdaySchema);
