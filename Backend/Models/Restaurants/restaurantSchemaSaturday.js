const mongoose = require("mongoose");

const restaurantsSchemaSaturday = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  service: {
    type: String,
  },
  opening: {
    type: String,
    required: true,
  },
  closing: {
    type: String,
    required: true,
  },
  members: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "RestaurantsSaturday",
  restaurantsSchemaSaturday
);
