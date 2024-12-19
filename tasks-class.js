import pc from 'picocolors'

export class TasksList {
  constructor (savedTasks = [], savedId = 0) {
    this.tasks = savedTasks
    this.id = savedId
    this.tasksStatus = ['done', 'todo', 'in-progress']
  }

  showTasks (tasks) {
    console.log(pc.magenta(`${'ID'.toString().padEnd(5)} ${'Task'.padEnd(15)} ${'Date'.padEnd(24)} ${'Status'.padStart(10)}`))
    tasks.forEach(({ id, name, date, status }) => {
      console.log(pc.green(`${id.toString().padEnd(5)} ${name.padEnd(15)} ${date.padEnd(24)} ${status.padStart(10)}`))
    })
  }

  list ({ status }) {
    if (this.tasksStatus.some(value => value === status)) {
      const filterdTasks = this.tasks.filter(value => value.status === status)
      this.showTasks(filterdTasks)
    } else {
      console.log('There is no status like this\nShowing all tasks')
      this.showTasks(this.tasks)
    }
  }

  add (task) {
    this.tasks.push(task)
  }

  update ({ id, newName }) {
    const currentTasks = this.tasks[id]
    if (!currentTasks || !newName) {
      console.log('The id is not valid or the description is empty')
      process.exit(1)
    }
    const updatedTasks = this.tasks.with(id, { ...currentTasks, name: newName })
    this.tasks = updatedTasks
  }

  updateStatus ({ id, newStatus }) {
    const currentTasks = this.tasks[id]
    if (!currentTasks || !newStatus) {
      console.log('The id is not valid or the status is empty')
      process.exit(1)
    }
    const updatedTasks = this.tasks.with(id, { ...currentTasks, status: newStatus })
    this.tasks = updatedTasks
  }

  delete ({ id }) {
    this.tasks = this.tasks.filter(value => value.id !== Number(id))
  }
}
