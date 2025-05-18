const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
  wishlist_id: { type: Number },
  user_id: { type: String, required: true, ref: 'User' },
  product_id: { type: mongoose.Schema.Types.Mixed, required: true, ref: 'Product' },
  added_at: { type: Date, default: Date.now }
});

// Không đặt _id: false => Mongoose sẽ tự sinh _id
module.exports = mongoose.model('Wishlist', wishlistSchema);
