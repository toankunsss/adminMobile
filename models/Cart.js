const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  cart_id: { type: mongoose.Schema.Types.Mixed },
  user_id: { type: String, required: true, ref: 'User' },
  product_id: { type: mongoose.Schema.Types.Mixed, required: true, ref: 'Product' },
  quantity: { type: Number, required: true },
  size: { type: String },
  color: { type: String },
  price: { type: Number },
  oldPrice: { type: Number },
  name: { type: String },
  image: { type: String },
  discount: { type: String },
  added_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', cartSchema);
