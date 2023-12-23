# TODO App

A simple TODO app built with React.

## Installation

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the app: `npm start`.

## Usage

1. Add new tasks using the input bar.
2. Mark tasks as complete by clicking on them.
3. Delete tasks by clicking the 'X' button.
4. Clear the entire list using the "Clear list" button.

## Project Structure

/project
|-- src
| |-- App.js
| |-- Form.js
| |-- TodoList.js
| |-- Stats.js
| |-- Logo.js
| |-- ...
|-- public
|-- ...

## Documentation

### Assumptions

- Users are familiar with the basic concepts of a TODO app.
- The app is designed for personal use, and there is no authentication or user-specific data.

### Unhandled Edge Cases

1. **Empty Tasks:** Adding an empty task is not allowed.
2. **Deletion Confirmation:** There is no confirmation for task deletion. Users might accidentally delete a task.
3. **Accessibility:** The app may not be fully accessible for users with disabilities.

