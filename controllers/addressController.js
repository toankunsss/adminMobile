const Address = require('../models/Address');

exports.getAllAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAddressesByUserId = async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) return res.status(400).json({ error: 'user_id is required' });
    const addresses = await Address.find({ user_id });
    res.json(addresses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAddress = async (req, res) => {
  try {
    const address = new Address(req.body);
    await address.save();
    res.status(201).json(address);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!address) return res.status(404).json({ error: 'Address not found' });
    res.json(address);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) return res.status(404).json({ error: 'Address not found' });
    res.json({ message: 'Address deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.selectAddress = async (req, res) => {
  try {
    const { user_id, selected_id } = req.body;
    if (!user_id || !selected_id) return res.status(400).json({ error: 'user_id and selected_id are required' });
    const addresses = await Address.find({ user_id });
    await Promise.all(addresses.map(addr => {
      addr.isSelected = addr.id === selected_id;
      return addr.save();
    }));
    res.json({ message: 'Address selection updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
