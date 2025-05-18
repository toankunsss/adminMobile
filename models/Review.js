const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  review_id: { type: Number, required: true, unique: true },
  product_id: { type: mongoose.Schema.Types.Mixed, required: true, ref: 'Product' },
  user_id: { type: String, required: true, ref: 'User' },
  rating: { type: Number, required: true },
  comment: { type: String },
  created_at: { type: Date, default: Date.now }
}, { _id: false });

module.exports = mongoose.model('Review', reviewSchema);
