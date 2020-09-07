const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: String,
  straindescription: String,
  productdescription: String,
  called: Array,
  form: String ,
  quantity: Number,
  totalmg: Number,
  mgperdose: Number,
  dosesize: String,
  personal: Boolean,
  salequantity: Number,
  img: String,
  strain: String,
  effects: Array,
  comments: Array,
  price: Number,
  deals: String,
  recipe: Array,
  totalgrams: Number,
  manufacturer: String,
  originalamount: Number,
  size: Number,
  mgpercontainer: Number,
  originialform: String,
  container: String,
  unitamount: String,
//   subtitle: String,
//   body1: String,
//   body2: String,
//   link: String,
//   author: String,
rating: Number,
  display: {type: Boolean},
  date: { type: Date, default: Date.now }
});

const Products = mongoose.model("products", productsSchema);

module.exports = Products;