let tasks = ['wash dishes', 'do laundry']

tasks.push('clean room')
console.log(tasks);

tasks.unshift('buy groceries')
console.log(tasks);

const skippedTask = tasks.shift()
console.log(tasks, "removed:", skippedTask);

const completedTask = tasks.pop()
console.log(tasks, "removed:", completedTask);