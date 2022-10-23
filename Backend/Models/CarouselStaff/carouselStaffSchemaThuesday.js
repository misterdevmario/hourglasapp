const mongoose = require("mongoose");

const carouselStaffSchemaThuesday = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phrase: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "CarouselStaffThuesday",
  carouselStaffSchemaThuesday
);
