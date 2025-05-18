const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  product_id: { type: Number, required: true, unique: true },
  category_id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String },
  original_price: { type: Number, required: true },
  sale_price: { type: Number, required: true },
  stock: { type: Number, required: true },
  images: [{ type: String }],
  rating: {
    average: { type: Number, default: 0 },
    count: { type: Number, default: 0 }
  },
  colors: [{
    name: { type: String, required: true },
    code: { type: String, required: true }
  }],
  sizes: [{ type: String }],
  created_at: { type: Date, default: Date.now }
}, { _id: false });

module.exports = mongoose.model('Product', productSchema);
