const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "rayaru",
  database: "task_traker",
});

module.exports = pool.promise();
