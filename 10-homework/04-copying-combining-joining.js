let original = [1, 2, 3]

let copy = original.copyWithin()

let group1 = ['Alice', 'Bob']
let group2 = ['Charlie', 'Dave']

let allUsers = group1.concat(group2)
console.log(allUsers);

allUsers = allUsers.join(' - ')
console.log(allUsers);