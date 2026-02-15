require('dotenv').config();
const { Pool } = require('pg');
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Example query to test connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) throw err;
  console.log(res.rows);
  pool.end();
});
