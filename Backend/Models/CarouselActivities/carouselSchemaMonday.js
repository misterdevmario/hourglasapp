const mongoose = require("mongoose");

const carouselMondaySchema = mongoose.Schema({
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

module.exports = mongoose.model("CarouselMonday", carouselMondaySchema);