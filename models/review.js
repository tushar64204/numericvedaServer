// Mongoose model for review
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  customerName: { type: String, required: true },
  comment: { type: String, required: true },
  photo: { type: String }, // Assuming the photo will be stored as a URL
  rating: { type: Number, required: true, min: 1, max: 4 },
  createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;