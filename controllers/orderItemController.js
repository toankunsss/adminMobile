const OrderItem = require('../models/OrderItem');

exports.getAllOrderItems = async (req, res) => {
  try {
    const items = await OrderItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getOrderItemsByOrderId = async (req, res) => {
  try {
    const { order_id } = req.query;
    if (!order_id) return res.status(400).json({ error: 'order_id is required' });
    const items = await OrderItem.find({ order_id });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createOrderItem = async (req, res) => {
  try {
    const item = new OrderItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateOrderItem = async (req, res) => {
  try {
    const item = await OrderItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ error: 'Order item not found' });
    res.json(item);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteOrderItem = async (req, res) => {
  try {
    const item = await OrderItem.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: 'Order item not found' });
    res.json({ message: 'Order item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
