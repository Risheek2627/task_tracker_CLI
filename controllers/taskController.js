const db = require("../config/database");

//add new task
const addTask = (description) => {
  const query = "INSERT INTO tasks (description) VALUES(?)";
  db.execute(query, [description], (err, results) => {
    if (err) {
      console.log("ERROR ADDING TASK", err.message);
      return;
    }
    console.log(`Task added successfuly (ID : ${results.insertId})`);
  });
};
