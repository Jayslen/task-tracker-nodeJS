export class TasksList {
  constructor (defaultTasks = []) {
    this.tasks = defaultTasks
    this._id = 0
  }

  addTask ({ description }) {
    this.tasks.push({ title: description, id: this.tasks.length })
  }

  deleteTask (id) {
    const newTasks = this.tasks.filter(values => values.id !== id)
    this.tasks = newTasks
  }
}
