const Cart = require('../models/Cart');

exports.getAllCartItems = async (req, res) => {
  try {
    const items = await Cart.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCartByUserId = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) return res.status(400).json({ error: 'user_id is required' });
    const items = await Cart.find({ user_id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCartItem = async (req, res) => {
  try {
    const item = new Cart(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const item = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Cart item not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCartItem = async (req, res) => {
  try {
    const item = await Cart.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Cart item not found' });
    res.json({ message: 'Cart item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
