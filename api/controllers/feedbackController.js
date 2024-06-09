const Feedback = require('../model/feedback');


// Create a new user
exports.createFeedback = async (req, res, next) => {
  
    try {
        const newFeedback = new Feedback(req.body);
        const savedFeedback = await newFeedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        next(error);
    }
};

// Get all feedback
exports.getAllfeedback = async (req, res, next) => {
    try {
        const feedback = await Feedback.find();
        res.status(200).json(feedback);
    } catch (error) {
        next(error);
    }
};

// Get user by ID
exports.getFeedbackById = async (req, res, next) => {
    try {
        const feedbackId = req.params.feedbackId;
        const feedback = await Feedback.findById(feedbackId);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json(feedback);
    } catch (error) {
        next(error);
    }
};

// Update user by ID
exports.updateFeedback = async (req, res, next) => {
    try {
        const feedbackId = req.params.feedbackId;
        const updatedFeedback = await User.findByIdAndUpdate(feedbackIdId, req.body, { new: true });
        if (!updatedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json(updatedFeedback);
    } catch (error) {
        next(error);
    }
};

// Delete user by ID
exports.deleteFeedback = async (req, res, next) => {
    try {
        const feedbackId = req.params.userId;
        const deletedFeedback = await Feedback.findByIdAndDelete(feedbackId);
        if (!deletedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.status(200).json(deletedFeedback);
    } catch (error) {
        next(error);
    }
};



