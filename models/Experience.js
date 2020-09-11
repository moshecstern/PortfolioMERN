const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
  Title: String,
  userID: String,
  Rating: Number,
  Catagory: String,
  Role: String,
  DescriptionA: String,
  DescriptionB: String,
  Skills: Array,
  Website: String,
  CodeLink: String,
  Image: String,
  DateStarted: {type: Date},
  DateEnded: {type: Date},
  display: {type: Boolean},
  date: { type: Date, default: Date.now }
});

const Experience = mongoose.model("experience", experienceSchema);

module.exports = Experience;