const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rayaru",
  database: "task_tracker",
});

module.exports = pool.promise();
