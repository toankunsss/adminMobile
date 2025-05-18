const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  user_id: { type: String, required: true, ref: 'User' },
  message: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  is_read: { type: Boolean, default: false }
}, { _id: false });

module.exports = mongoose.model('Notification', notificationSchema);
