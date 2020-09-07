const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StrainsSchema = new Schema({
  name: {type: String, unique: true},
  othernames: Array,
  description: String,
  thc: Number,
  img: String,
  strain: String,
  effects: Array,
  comments: Array,
  products: Array,
  parents: Array,
  links: Array,
  relieves: Array,
  similer: Array,
rating: Number,
  display: {type: Boolean, default: true},
  date: { type: Date, default: Date.now }
});

const Strain = mongoose.model("strains", StrainsSchema);

module.exports = Strain;