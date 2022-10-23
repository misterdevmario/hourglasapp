const mongoose = require("mongoose");

const carouselStaffSchemaFriday = mongoose.Schema({
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
  "CarouselStaffFriday",
  carouselStaffSchemaFriday
);
