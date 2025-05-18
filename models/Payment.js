const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  payment_id: { type: Number, required: true, unique: true },
  order_id: { type: Number, required: true, ref: 'Order' },
  amount: { type: Number, required: true },
  payment_method: { type: String, required: true },
  status: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
}, { _id: false });

module.exports = mongoose.model('Payment', paymentSchema);
