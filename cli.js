const readline = require("readline");
const { exec } = require("child_process");
const path = require("path");
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
  prompt: "TaskTrackerCLI>>>",
});

// Help commands dictionary
const HELP_COMMANDS = {
  add: "Add a new task: add [task description]",
  update: "Update an existing task: update [task ID] [new description]",
  delete: "Delete a task: delete [task ID]",
  "mark-in-progress": "Mark a task as in progress: mark-in-progress [task ID]",
  "mark-done": "Mark a task as completed: mark-done [task ID]",
  list: "List tasks: list [optional: status filter]",
  "--help": "Show this help menu",
};

// Welcome message
const WELCOME_MESSAGE = `
Welcome to Task Tracker CLI!
Type --help to see available commands.
`;

const showHelp = () => {
  console.log("\nAvailable Commands:");
  Object.entries(HELP_COMMANDS).forEach(([cmd, desc]) => {
    console.log(`  ${cmd.padEnd(15)} : ${desc}`);
  });
  console.log("\n");
};

const handleCommand = (command, args) => {
  if (command === "--help") {
    showHelp();
    return;
  }

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
      if (args.length === 0) {
        console.log("Please provide ID to delete the task");
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
      console.log("Invalid command. Type --help to see available commands.");
      break;
  }
};

const startInteractiveSession = () => {
  console.log(WELCOME_MESSAGE);
  rl.prompt();

  rl.on("line", (input) => {
    const [command, ...args] = input.split(" ");
    handleCommand(command, args);
    rl.prompt();
  }).on("close", () => {
    console.log("Exiting Task Tracker CLI......");
    process.exit(0);
  });
};

const openNewTerminal = () => {
  const isWindows = process.platform === "win32";
  const cliPath = path.join(__dirname, "cli.js");

  const terminalCommands = {
    win32: `start cmd.exe /K "node ${cliPath}"`,
    darwin: `osascript -e 'tell application "Terminal" to do script "node ${cliPath}"'`,
    linux: `gnome-terminal -- bash -c "node ${cliPath}"`,
  };

  const command = terminalCommands[process.platform] || terminalCommands.linux;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error opening terminal: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
  });
};

// Check if script is run directly
if (require.main === module) {
  // Check if this is the first instance
  if (!process.env.CLI_INSTANCE) {
    process.env.CLI_INSTANCE = "true";
    openNewTerminal();
  } else {
    startInteractiveSession();
  }
} else {
  module.exports = {
    handleCommand,
    startInteractiveSession,
  };
}
