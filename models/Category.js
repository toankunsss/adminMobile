const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  _id: { type: String, required: true },
  category_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  img_URI: { type: String }
}, { _id: false });

module.exports = mongoose.model('Category', categorySchema);
