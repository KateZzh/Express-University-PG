const { Pool } = require("pg")

const pool = new Pool({
  password: process.env.PWD,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE
});

module.exports = pool;