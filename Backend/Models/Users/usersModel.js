const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    unique: true,
    minlength: 6,
  },
  admin: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
