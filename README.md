Task Tracker CLI

Task Tracker CLI is a simple command-line interface application designed to help users track, manage, and organize their tasks efficiently. It supports creating, updating, deleting, and categorizing tasks, providing a seamless way to manage your workload.

Table of Contents

Features

Project Structure

Technologies Used

Installation

Usage

Commands

Database Schema

Error Handling

Future Improvements

Features

Add new tasks with a description.

Update task descriptions.

Delete tasks by their ID.

Mark tasks as "In Progress" or "Done."

List tasks filtered by their status (e.g., To-Do, In Progress, Done).

Persistent storage using MySQL.

Simple and intuitive CLI for task management.


Technologies Used

Node.js: JavaScript runtime for executing code.

MySQL: Database for storing tasks and their statuses.

Chalk: For CLI text styling.

Colors: For adding colored outputs to CLI.

Readline: For handling interactive command-line inputs.

Installation

Clone the Repository:

git clone <repository-url>
cd task_tracker

Install Dependencies:
Ensure Node.js is installed. Run the following command:

npm install

Setup Database:

Create a MySQL database named task_tracker.

Add the necessary credentials in the database.js file.

Example:

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "<your_password>",
  database: "task_tracker",
});

Run the Application:

node cli.js

Usage

Start the CLI:

node cli.js

Follow the on-screen instructions.

Interactive Commands:
The CLI prompts for commands. Use --help to see the list of available commands.

Commands

Command

Description

Example

add <description>

Add a new task with the given description.

add "Buy groceries"

update <id> <desc>

Update an existing task description.

update 1 "Buy groceries and cook dinner"

delete <id>

Delete a task by its ID.

delete 1

mark-in-progress <id>

Mark a task as "In Progress".

mark-in-progress 2

mark-done <id>

Mark a task as "Done".

mark-done 3

list

List all tasks.

list

list <status>

List tasks filtered by their status.

list done

Database Schema

The application uses a tasks table with the following schema:

Column Name

Data Type

Description

id

INT (Primary Key)

Unique identifier for the task.

description

VARCHAR(255)

Description of the task.

status

ENUM

Task status: todo, in-progress, done.

createdAt

DATETIME

Timestamp of task creation.

updatedAt

DATETIME

Timestamp of last task update.

Error Handling

Invalid Input: Displays an error message if the input format is incorrect.

Database Issues: Gracefully handles connection errors or query issues.

Task Not Found: Provides meaningful feedback when a task ID is invalid.

Future Improvements

Add user authentication for personalized task lists.

Enhance the CLI with auto-completion for commands.

Export task lists as CSV or JSON.

Add deadlines and priority levels for tasks.

Create a web interface for task management.

Contributing

Feel free to contribute to the project by forking the repository and submitting pull requests.

License

This project is licensed under the ISC License. See the LICENSE file for more details.

Acknowledgments

Special thanks to the open-source community for the tools and libraries that made this project possible.

