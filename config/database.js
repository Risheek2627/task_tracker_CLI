const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rayaru",
  database: "task_tracer",
});

module.exports = pool;
