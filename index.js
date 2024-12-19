import { TasksList } from './tasks-class.js'
import { readFile, writeFile } from 'node:fs/promises'

const defaultValues = { defaultTasks: [], defaultId: 0 }
const [action, arg1, arg2] = process.argv.slice(2)

try {
  const savedTasks = await readFile('task.json', { encoding: 'utf-8' })
  const maxId = Math.max(...JSON.parse(savedTasks).map(value => value.id))
  defaultValues.defaultTasks.push(...JSON.parse(savedTasks))
  defaultValues.defaultId = maxId
} catch (e) {
  if (e.code === 'ENOENT') {
    writeFile('task.json', JSON.stringify([]))
  } else {
    console.error('Something happend')
    process.exit(1)
  }
}

const tasks = new TasksList(defaultValues.defaultTasks)

switch (action) {
  case 'list':
    tasks.list({ status: arg1 })
    break

  case undefined:
    console.log('Not command was introduced')
    break
  default:
    console.log(`Actions '${arg1} does not exit'`)
    break
}
