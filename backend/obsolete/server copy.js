// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parses JSON body

// POST route to receive form submission
app.post('/api/submit', (req, res) => {
  const formData = req.body;

  console.log('Received form data:', formData);

  // You could save this to a database, send an email, etc.
  res
    .status(200)
    .json({ message: 'Form submitted successfully!', data: formData });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
