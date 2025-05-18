const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  address_id: { type: Number },
  user_id: { type: String, required: true, ref: 'User' },
  address: { type: String, required: true },
  label: { type: String },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
  isSelected: { type: Boolean, default: false }
});

module.exports = mongoose.model('Address', addressSchema);