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

//mark a task as in-progress
const markInProgress = async (id) => {
  try {
    const query =
      "UPDATE tasks SET status = 'in-progress' , updateAT = NOW() WHERE id = ? ";
    const [result] = await db.query(query, [id]);
    if (result.affectedRows > 0) {
      console.log(`Task marked as in-progress (ID : ${id})`);
    } else {
      console.log(`Task with id ${id} not found`);
    }
  } catch (error) {
    console.log("Error marking in-progress", error.message);
  }
};

//mark a task as done
const markDone = async (id) => {
  try {
    const query =
      "UPDATE tasks SET status = 'done' , updateAT = NOW() WHERE id = ? ";
    const [result] = await db.query(query, [id]);
    if (result.affectedRows > 0) {
      console.log(`Task marked as done (ID : ${id})`);
    } else {
      console.log(`Task with id ${id} not found`);
    }
  } catch (error) {
    console.log("Error in mark as done : ", error.message);
  }
};

// list all tasks (with optional status )

const listTasks = async (status = null) => {
  try {
    const query = "SELECT * FROM tasks";
    if (status) {
      query + "WHERE status=?";
    }
    const [result] = await db.query(query, [status]);
    if (result.affectedRows === 0) {
      console.log("No tasks found");
    } else {
      result.forEach((task) => {
        console.log(
          `ID : ${task.id}, description : ${task.description} , status : ${task.description}`
        );
      });
    }
  } catch (error) {
    console.log("Error listing the tasks", error.message);
  }
};

module.exports = {
  addTask,
  updateTask,
  deleteTask,
  markInProgress,
  markDone,
  listTasks,
};
