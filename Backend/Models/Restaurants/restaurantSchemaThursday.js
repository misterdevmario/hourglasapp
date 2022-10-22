const mongoose = require('mongoose')



const restaurantsSchemaThursday = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    service: {
        type: String,
        required: true,
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
        required: true,
      },
      image: {
        type: String,
        required: true
      },
})




module.exports = mongoose.model("RestaurantsThursday", restaurantsSchemaThursday);