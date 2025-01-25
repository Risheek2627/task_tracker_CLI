const readline = require("readline");
const {
  addTask,
  updateTask,
  deleteTask,
  markInProgress,
  markDone,
  listTasks,
} = require("./controllers/taskController");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const handleCommand = (command, args) => {
  switch (command) {
    case "add":
      if (args.length === 0) {
        console.log("Please provide a task description");
        return;
      }
      addTask(args.join(" "));
      break;
    case "update":
      if (args.length < 2) {
        console.log("Please provide ID and the new description");
        return;
      }
      updateTask(args[0], args.slice(1).join(" "));
      break;
    case "delete":
      if (args.length < 2) {
        console.log("Please provide ID and description");
        return;
      }
      deleteTask(args[0]);
      break;
    case "mark-in-progress":
      if (args.length === 0) {
        console.log("Please provide ID to mark as progress");
        return;
      }
      markInProgress(args[0]);
      break;
    case "mark-done":
      if (args.length === 0) {
        console.log("Please provide ID to mark as Done");
        return;
      }
      markDone(args[0]);
      break;
    case "list":
      listTasks(args[0] || null);
      break;
    default:
      console.log(
        "Invalid command. Available commands: add, update, delete, mark-in-progress, mark-done, list"
      );
      break;
  }
};

const [, , command, ...args] = process.argv;
handleCommand(command, args);

rl.close();
