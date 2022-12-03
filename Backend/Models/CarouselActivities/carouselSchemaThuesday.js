const mongoose = require("mongoose");

const carouselThuesdaySchema = mongoose.Schema({
  hours: {
    type: String,
    required: true,
  },
  locationEn: {
    type: String,
    required: true,
  },
  locationEs: {
    type: String,
    required: true,
  },
  activityEn: {
    type: String,
    required: true,
  },
  activityEs: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("CarouselThuesday", carouselThuesdaySchema);
