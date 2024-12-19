# Task tracker app.

This is a simple task tracker app built with NODE JS to write the tasks into a json, and read the file to get the tasks saved.

## Installation
 To install it locally you need to have node installed in your machine. Then you can clone the repository and run the following command in the terminal:

```bash
git clone https://github.com/Jayslen/task-tracker-nodeJS.git
npm install
```

## Usage

To run the app you can use the following command:

```bash
node index.js arg1 arg2
```

Then you can use the following commands to interact with the app:

```bash
node index.js list todo
node index.js list in-progress
node index.js list done
node index.js add "Task name"
node index.js delete "id"
node index.js update "id" "New task name"
```
