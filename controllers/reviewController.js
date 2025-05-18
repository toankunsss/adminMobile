const Review = require('../models/Review');

exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getReviewsByProductId = async (req, res) => {
  try {
    const { product_id } = req.query;
    if (!product_id) return res.status(400).json({ error: 'product_id is required' });
    const reviews = await Review.find({ product_id });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.json(review);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.json({ message: 'Review deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
