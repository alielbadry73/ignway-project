// Entry point for backend
const express = require('express');
const pool = require('../config/db');
const cors = require('cors');
const app = express();
// pool is imported from config/db.js

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/auth', require('../routes/auth'));
app.use('/api/v1/users', require('../routes/users'));
app.use('/api/v1/courses', require('../routes/courses'));
app.use('/api/v1/lessons', require('../routes/lessons'));
app.use('/api/v1/homework', require('../routes/homework'));
app.use('/api/v1/submissions', require('../routes/submissions'));

const PORT = process.env.PORT || 5000;


// Test PostgreSQL connection before starting server
pool.query('SELECT 1', (err) => {
  if (err) {
    console.error('PostgreSQL connection error:', err);
    process.exit(1);
  } else {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
});
