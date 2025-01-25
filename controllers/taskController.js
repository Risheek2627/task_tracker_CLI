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

// update the task
const updateTask = async (id, description) => {
  try {
    const query = "UPDATE tasks SET description=?, updateAt= NOW() WHERE id=?";
    const [result] = await db.query(query, [description, id]);
    if (result.affectedRows > 0) {
      console.log(`Task updated successfully (ID : ${id})`);
    } else {
      console.log(`Task with ID ${id} not found`);
    }
  } catch (error) {
    console.log("Error updating the task", error.message);
  }
};

// delete the task
const deleteTask = async (id) => {
  try {
    const query = "DELETE FROM tasks WHERE id= ?";
    const [result] = await db.query(query, [id]);
    if (result.affectedRows > 0) {
      console.log(`task deleted successfully (ID : ${id})`);
    } else {
      console.log(`Task with ID ${id} not found`);
    }
  } catch (error) {
    console.log("Error deleting task :", error.message);
  }
};
