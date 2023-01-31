const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    zip: {
      type: Number,
      required: [true, 'Zip code is required.'],
      minlength: [5, 'Zip code must be 5 digits.'],
      maxlength: [5, 'Zip code must be 5 digits.']
    },
    activity: {
      type: String,
      required: [true, 'Activity is required.'],
    },
    image: {
      type: String,
    },
    color: {
      type: String,
      required: [true, "Please enter the primary color."],
    },
    date: {
      type: String,
      required: [true, "Please enter the date witnessed."],
    },
    },
  { timestamps: true }
);


const Bird = mongoose.model('Bird', birdSchema);


module.exports = Bird;