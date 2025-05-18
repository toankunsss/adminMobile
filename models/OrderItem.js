const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  order_item_id: { type: Number, required: true, unique: true },
  order_id: { type: Number, required: true, ref: 'Order' },
  product_id: { type: mongoose.Schema.Types.Mixed, required: true, ref: 'Product' },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }
}, { _id: false });

module.exports = mongoose.model('OrderItem', orderItemSchema);
