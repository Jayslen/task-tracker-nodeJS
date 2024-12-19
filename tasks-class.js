export class TasksList {
  constructor (defaultTasks = []) {
    this.tasks = defaultTasks
    this._id = 0
    this._tasksStatus = ['done', 'not done', 'in-progress']
  }

  showTasks (tasks) {
    console.log(`${'ID'.toString().padEnd(5)} ${'Task'.padEnd(15)} ${'Date'.padEnd(24)} ${'Status'.padStart(10)}`)
    tasks.forEach(({ id, task, date, status }) => {
      console.log(`${id.toString().padEnd(5)} ${task.padEnd(15)} ${date.padEnd(24)} ${status.padStart(10)}`)
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
}
