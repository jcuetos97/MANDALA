const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },  
  description: {
    type: String,
    required: true,
  },
  medium: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

const Item = model("Item", itemSchema);

module.exports = Item;