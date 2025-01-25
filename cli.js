const readline = require("readline");
const { spawn } = require("child_process");
const path = require("path");
const colors = require("colors");

// Ensure colors are installed via: npm install colors
colors.enable();
colors.setTheme({
  prompt: "blue",
  info: "green",
  warn: "yellow",
  error: "red",
});

// Terminal opening function
const openNewTerminal = () => {
  const cliPath = path.join(__dirname, "cli.js");

  switch (process.platform) {
    case "win32":
      spawn("cmd.exe", ["/c", "start", "cmd.exe", "/K", "node", cliPath], {
        stdio: "ignore",
        detached: true,
      });
      break;
    case "darwin": // macOS
      spawn(
        "osascript",
        ["-e", `tell application "Terminal" to do script "node ${cliPath}"`],
        {
          stdio: "ignore",
          detached: true,
        }
      );
      break;
    case "linux":
      spawn("x-terminal-emulator", ["-e", `node ${cliPath}`], {
        stdio: "ignore",
        detached: true,
      });
      break;
    default:
      console.log("Unsupported platform".red);
      process.exit(1);
  }

  process.exit(0);
};

// Check if this is the first instance
if (!process.env.CLI_INSTANCE) {
  process.env.CLI_INSTANCE = "true";
  openNewTerminal();
}

// Simulated task controller (replace with your actual implementation)
const taskController = {
  addTask: (description) => {
    console.log(`Task added: ${description}`.green);
    return Math.floor(Math.random() * 1000);
  },
  updateTask: (id, description) => {
    console.log(`Task ${id} updated: ${description}`.green);
  },
  deleteTask: (id) => {
    console.log(`Task ${id} deleted`.green);
  },
  markInProgress: (id) => {
    console.log(`Task ${id} marked in progress`.green);
  },
  markDone: (id) => {
    console.log(`Task ${id} marked as done`.green);
  },
  listTasks: () => {
    console.log("Listing tasks...".blue);
  },
};

// Welcome and help messages
const WELCOME_MESSAGE = `
${"╔══════════════════════════════════╗".yellow}
${"║     ".yellow}${"Task Tracker CLI".green}${"      ║".yellow}
${"╚══════════════════════════════════╝".yellow}

${"Welcome!".yellow} ${"Type".grey} ${"--help".cyan} ${
  "to see available commands.".grey
}
`;

const HELP_COMMANDS = {
  add: "Add a new task".green + ": add [task description]",
  update:
    "Update an existing task".yellow + ": update [task ID] [new description]",
  delete: "Delete a task".red + ": delete [task ID]",
  "mark-in-progress":
    "Mark a task as in progress".magenta + ": mark-in-progress [task ID]",
  "mark-done": "Mark a task as completed".cyan + ": mark-done [task ID]",
  list: "List tasks".blue + ": list [optional: status filter]",
  "--help": "Show this help menu".white,
};

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "TaskTrackerCLI>>> ".white,
});

// Show help function
const showHelp = () => {
  console.log("\nAvailable Commands:".underline.blue);
  Object.entries(HELP_COMMANDS).forEach(([cmd, desc]) => {
    console.log(`  ${cmd.green.padEnd(15)} : ${desc}`);
  });
  console.log("\n");
};

// Command handler
const handleCommand = (command, args) => {
  if (command === "--help") {
    showHelp();
    return;
  }

  switch (command) {
    case "add":
      if (args.length === 0) {
        console.log("Please provide a task description".red);
        return;
      }
      taskController.addTask(args.join(" "));
      break;
    case "update":
      if (args.length < 2) {
        console.log("Please provide ID and the new description".red);
        return;
      }
      taskController.updateTask(args[0], args.slice(1).join(" "));
      break;
    case "delete":
      if (args.length === 0) {
        console.log("Please provide ID to delete the task".red);
        return;
      }
      taskController.deleteTask(args[0]);
      break;
    case "mark-in-progress":
      if (args.length === 0) {
        console.log("Please provide ID to mark as progress".red);
        return;
      }
      taskController.markInProgress(args[0]);
      break;
    case "mark-done":
      if (args.length === 0) {
        console.log("Please provide ID to mark as Done".red);
        return;
      }
      taskController.markDone(args[0]);
      break;
    case "list":
      taskController.listTasks(args[0] || null);
      break;
    default:
      console.log(
        "Invalid command. Type --help to see available commands.".yellow
      );
      break;
  }
};

// Start interactive session
const startInteractiveSession = () => {
  console.log(WELCOME_MESSAGE);
  rl.prompt();

  rl.on("line", (input) => {
    const [command, ...args] = input.split(" ");
    handleCommand(command, args);
    rl.prompt();
  }).on("close", () => {
    console.log("Exiting Task Tracker CLI......".red);
    process.exit(0);
  });
};

// Start the session
startInteractiveSession();
