const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  order_id: { type: Number, required: true, unique: true },
  user_id: { type: String, required: true, ref: 'User' },
  total_amount: { type: Number, required: true },
  status: { type: String, required: true },
  shipping_address: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
