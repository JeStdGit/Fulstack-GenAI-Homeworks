const ids = ["2", "4"].map(Number)
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 4, name: "Carol" }
]
const result = users.filter(u => ids.includes(u.id))
console.log(result) // Output: [ { id: 2, name: "Bob" }, { id: 4, name: "Carol" } ]