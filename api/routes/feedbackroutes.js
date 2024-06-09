
const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');

// Create a new feedback
router.post('/feedback', feedbackController.createFeedback);

// Get all feedback
router.get('/feedback', feedbackController.getAllfeedback);

// Get feedback by ID
router.get('/feedback/:feedbackId', feedbackController.getFeedbackById);

// Update feedback by ID
router.put('/feedback/:feedbackId', feedbackController.updateFeedback);

// Delete feedback by ID
router.delete('/feedback/:feedbackId', feedbackController.deleteFeedback);


module.exports = router;
