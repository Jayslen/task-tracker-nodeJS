import { TasksList } from './tasks-class.js'
import { readFile } from 'node:fs/promises'

const defaultTasks = []

try {
  const savedTasks = await readFile('tas.json', { encoding: 'utf-8' })
  defaultTasks.push(...JSON.parse(savedTasks))
} catch {
  console.log('initializing file to save tasks')
}

const tasks = new TasksList(defaultTasks)
console.log(tasks.tasks)
