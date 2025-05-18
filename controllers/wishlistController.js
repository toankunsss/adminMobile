const Wishlist = require('../models/Wishlist');

exports.getAllWishlistItems = async (req, res) => {
  try {
    const items = await Wishlist.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getWishlistByUserId = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) return res.status(400).json({ error: 'user_id is required' });
    const items = await Wishlist.find({ user_id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createWishlistItem = async (req, res) => {
  try {
    const item = new Wishlist(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteWishlistItem = async (req, res) => {
  try {
    const item = await Wishlist.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Wishlist item not found' });
    res.json({ message: 'Wishlist item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

