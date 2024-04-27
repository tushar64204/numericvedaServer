// Express route for handling review related requests
const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// Route for posting a review
router.post('/reviews', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).send(review);
  } catch (error) {
    console.error('Error posting review:', error);
    res.status(500).send(error);
  }
});

module.exports = router;