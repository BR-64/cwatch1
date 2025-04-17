require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const caseRoutes = require('./routes/caseRoutes');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json()); // Built-in body parser

// Routes
app.use('/api/case', caseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
