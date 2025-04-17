// routes/admin.js
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const verifyToken = require('../middleware/auth');

// const isAdmin = async (req, res, next) => {
//   // Here you would typically check the user's token to verify their role
//   const user = await User.findById(req.userId); // Assuming `req.userId` is set from auth middleware

//   if (!user || !user.isAdmin) {
//     return res
//       .status(403)
//       .json({ message: 'Forbidden: You are not an admin.' });
//   }
//   next();
// };

const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({ message: 'Access denied, admin only' });
  }
  next();
};

// GET /admin/users - Fetch all users
router.get('/users', verifyToken, isAdmin, async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude password field
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
