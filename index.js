import { TasksList } from './tasks-class.js'
import { readFile, writeFile } from 'node:fs/promises'

const initialValues = { savedTasks: [], savedId: 0 }
const [action, arg1, arg2] = process.argv.slice(2)

const updateFile = ({ tasks }) => {
  try {
    writeFile('task.json', JSON.stringify(tasks))
  } catch {
    console.log('error')
  }
}

try {
  const savedTasks = await readFile('task.json', { encoding: 'utf-8' })
  const maxId = Math.max(...JSON.parse(savedTasks).map(value => value.id)) + 1
  initialValues.savedTasks.push(...JSON.parse(savedTasks))
  initialValues.savedId = maxId
} catch (e) {
  writeFile('task.json', JSON.stringify([]))
}

const tasks = new TasksList(initialValues.savedTasks, initialValues.savedId)

switch (action) {
  case 'list':
    tasks.list({ status: arg1 })
    break

  case 'add':
    tasks.add({ name: arg1, id: tasks.id, date: new Date().toLocaleString(), status: 'todo' })
    updateFile({ tasks: tasks.tasks })
    break

  case 'update':
    tasks.update({ id: arg1, newName: arg2 })
    updateFile({ tasks: tasks.tasks })
    break

  case `mark-${action.slice(5)}`:
    if (tasks.tasksStatus.includes(action.slice(5))) {
      tasks.updateStatus({ id: arg1, newStatus: action.slice(5) })
      updateFile({ tasks: tasks.tasks })
    }
    break

  case 'delete':
    tasks.delete({ id: arg1 })
    console.log('Task deleted')
    updateFile({ tasks: tasks.tasks })
    break

  case undefined:
    console.log('Not command was introduced')
    break

  default:
    console.log(`Actions '${arg1} does not exit'`)
    break
}
