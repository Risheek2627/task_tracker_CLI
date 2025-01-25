# Task Tracker CLI

Task Tracker CLI is a simple command-line interface application designed to help users track, manage, and organize their tasks efficiently. It supports creating, updating, deleting, and categorizing tasks, providing a seamless way to manage your workload.

---
## **project URL**
[Visit Project Repository](https://github.com/yourusername/task-tracker-cli)


## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Commands](#commands)
  
---

## Features

- Add new tasks with a description.
- Update task descriptions.
- Delete tasks by their ID.
- Mark tasks as "In Progress" or "Done."
- List tasks filtered by their status (e.g., To-Do, In Progress, Done).
- Persistent storage using MySQL.
- Simple and intuitive CLI for task management.

---

## **Project Structure**

```
task-tracker-cli/
│
├── config/
│   └── database.js               # Database configuration
│
├── controllers/
│   └── taskController.js         # Task-related logic
│
├── cli.js                        # Main CLI entry file
├── package.json                  # Node.js package file
├── README.md                     # Project explanation and usage
└── .gitignore                    # Git ignore file
```
---

## Technologies Used

- **Node.js**: JavaScript runtime for executing code.
- **MySQL**: Database for storing tasks and their statuses.
- **Chalk**: For CLI text styling.
- **Colors**: For adding colored outputs to CLI.
- **Readline**: For handling interactive command-line inputs.

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Risheek2627/task_tracker_CLI.git
   cd task_tracker

2. **Install Dependencies**:
   ```bash
   npm install

3. **Setup Database**:
  - Create a MySQL database named task_tracker.
  - Add the necessary credentials in the database.js file.
       Example database.js
    ```bash
    const mysql = require("mysql2");

    const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "<your_password>",
    database: "task_tracker",
    });

    module.exports = pool.promise();
    

# CLI Task Manager

4.**Run the Application**

```bash
node cli.js
```

## **Usage**

Start the CLI by running the command above and follow the on-screen instructions.

## **Commands**

| **Command** | **Description** | **Example** |
|-------------|-----------------|-------------|
| `add <description>` | Add a new task with the given description | `add "Buy groceries"` |
| `update <id> <desc>` | Update an existing task description | `update 1 "Buy groceries and cook dinner"` |
| `delete <id>` | Delete a task by its ID | `delete 1` |
| `mark-in-progress <id>` | Mark a task as "In Progress" | `mark-in-progress 2` |
| `mark-done <id>` | Mark a task as "Done" | `mark-done 3` |
| `list` | List all tasks | `list` |
| `list <status>` | List tasks filtered by their status | `list done` |

## **Database Schema**

The application uses a `tasks` table with the following schema:

| **Column Name** | **Data Type** | **Description** |
|----------------|---------------|-----------------|
| `id` | INT (Primary Key) | Unique identifier for the task |
| `description` | VARCHAR(255) | Description of the task |
| `status` | ENUM | Task status: `todo`, `in-progress`, `done` |
| `createdAt` | DATETIME | Timestamp of task creation |
| `updatedAt` | DATETIME | Timestamp of last task update |
