const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  pincode: { type: String, default: '' },
  address: { type: String, default: '' },
  city: { type: String, default: '' },
  state: { type: String, default: '' },
  country: { type: String, default: '' },
  bankAccountNumber: { type: String, default: '' },
  accountHolderName: { type: String, default: '' },
  ifscCode: { type: String, default: '' },
  image: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
}, { _id: false });

module.exports = mongoose.model('User', userSchema);
