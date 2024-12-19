export class TasksList {
  constructor (savedTasks = [], savedId = 0) {
    this.tasks = savedTasks
    this._id = savedId
    this._tasksStatus = ['done', 'not done', 'in-progress']
  }

  get id () {
    return this._id
  }

  showTasks (tasks) {
    console.log(`${'ID'.toString().padEnd(5)} ${'Task'.padEnd(15)} ${'Date'.padEnd(24)} ${'Status'.padStart(10)}`)
    tasks.forEach(({ id, name, date, status }) => {
      console.log(`${id.toString().padEnd(5)} ${name.padEnd(15)} ${date.padEnd(24)} ${status.padStart(10)}`)
    })
  }

  list ({ status }) {
    if (this._tasksStatus.some(value => value === status)) {
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
}
