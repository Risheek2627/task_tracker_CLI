const db = require("../config/database");

//add new task
const addTask = async (description) => {
  try {
    const query = "INSERT INTO tasks (description) VALUES(?)";
    const [result] = await db.query(query, [description]);
    console.log(`task added successfully (ID : ${result.insertId})`);
  } catch (error) {
    console.log(`Error adding task`, error.message);
  }
};
