let tasks = ['wash dishes', 'do laundry']

tasks.push('clean room')
console.log(tasks);

tasks.unshift('buy groceries')
console.log(tasks);

const removedFromStart = tasks.shift()
console.log(tasks, "removed:", removedFromStart);

const removedFromEnd = tasks.pop()
console.log(tasks, "removed:", removedFromEnd);