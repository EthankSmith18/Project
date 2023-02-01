const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    zip: {
      type: Number,
      required: [true, 'Five digit Zip Code is required.'],
    },
    activity: {
      type: String,
      required: [true, 'Activity is required.'],
    },
    image: {
      type: String,
      required: [true, 'Image URL is required.'],
    },
    color: {
      type: String,
      required: [true, "Please enter the primary color."],
    },
    date: {
      type: Date,
      required: [true, "Please enter the date sighted."],
    },
    },
  { timestamps: true }
);


const Bird = mongoose.model('Bird', birdSchema);


module.exports = Bird;