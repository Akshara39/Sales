// controllers/userController.js

const User = require('../model/user');


// Display list of all users
exports.user_list = function(req, res) {
  User.find({}, function(err, users) {
      if (err) {
          return res.status(500).send('Error retrieving users');
      }
      res.render('user_list', { title: 'User List', users });
  });
};

// Display detail page for a specific user
exports.user_detail = function(req, res) {
  User.findById(req.params.id, function(err, user) {
      if (err) {
          return res.status(500).send('Error retrieving user');
      }
      res.render('user_detail', { title: 'User Detail', user });
  });
};

// Create a new user
exports.createUser = async (req, res, next) => {
  
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        next(error);
    }
};

// Get all users
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

// Get user by ID
exports.getUserById = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

// Update user by ID
exports.updateUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

// Delete user by ID
exports.deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(deletedUser);
    } catch (error) {
        next(error);
    }
};



