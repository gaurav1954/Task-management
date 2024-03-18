#Task Manager Project
This is a Node.js project for managing tasks and user authentication using Express.js.

## Setup Instructions

1. Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up your MongoDB connection by replacing the connection string in `models/db.js` with your MongoDB URI.

4. Start the server:

    ```bash
    npm start
    ```

## Features

- **User Registration**: Users can register with a username, password, and email.
- **User Authentication**: Users can log in with their credentials.
- **Session Management**: Session-based authentication is implemented to keep users logged in.
- **Task Management**: Users can create, edit, delete, and mark tasks as completed.
- **Flash Messages**: Flash messages are shown for successful or failed actions.

## Routes

### Registration

- `GET /register`: Render the registration form.
- `POST /register`: Register a new user.

### Login

- `GET /login`: Render the login form.
- `POST /login`: Log in a user.

### Logout

- `GET /logout`: Log out the current user.

### Tasks

- `GET /show`: Show all tasks for the logged-in user.
- `GET /completed`: Show completed tasks for the logged-in user.
- `GET /new`: Render the form to create a new task.
- `POST /new`: Create a new task.
- `GET /:id/edit`: Render the form to edit a task.
- `PATCH /edit/:id`: Edit a task.
- `DELETE /:id`: Delete a task.
- `PATCH /:id`: Mark a task as completed.

## Middleware

- `check`: Middleware to check if a user is logged in.

## Dependencies

- `express`: Web framework for Node.js.
- `bcrypt`: Library for hashing passwords.
- `method-override`: Middleware for HTTP method override.
- `connect-flash`: Flash message middleware for Express.

## Models

- `users`: Model for storing user information.
- `task`: Model for storing task information.

## Author

Gaurav bhandari
Diya khandelwal
Akshay mohpal

## License

This project is licensed under the [MIT License](LICENSE).
