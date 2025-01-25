# Task Tracker CLI

Task Tracker CLI is a simple command-line interface application designed to help users track, manage, and organize their tasks efficiently. It supports creating, updating, deleting, and categorizing tasks, providing a seamless way to manage your workload.

---

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

## Project Structure

Task Tracker CLI ├── cli.js # Main CLI application ├── taskController.js # Controller for task operations ├── database.js # Database connection configuration ├── package.json # Project metadata and dependencies ├── package-lock.json # Dependency lock file
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
    
4.**Run the Application** : 
    ```bash
     node cli.js
