const mongoose = require("mongoose");

const carouselStaffSchemaMonday = mongoose.Schema({
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
  "CarouselStaffMonday",
  carouselStaffSchemaMonday
);
