const bcrypt = require('bcrypt');

// In a real app, use a DB and hash passwords properly
const users = [
  {
    id: 1,
    email: 'user@example.com',
    passwordHash: bcrypt.hashSync('password123', 10),
  },
];

module.exports = users;
