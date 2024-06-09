// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a new user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Get user by ID
router.get('/users/:userId', userController.getUserById);

// Update user by ID
router.put('/users/:userId', userController.updateUser);

// Delete user by ID
router.delete('/users/:userId', userController.deleteUser);


module.exports = router;
