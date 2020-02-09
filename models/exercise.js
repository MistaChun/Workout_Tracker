const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for your workout"
  },
  description: { 
    type: String, 
    required: true 
  },
  duration: {
    type: Number,
    required: true 
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
