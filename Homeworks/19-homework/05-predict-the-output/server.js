const item = { id: 3, title: "Engineer", level: "Senior", salary: 7000 }
const req = { body: { salary: 9000 } }

// PUT handler
const putItem = { id: item.id, ...req.body }
console.log(putItem)
// Predicted Output: { id: 3, salary: 9000 }

// PATCH handler
const patchedItem = { ...item, ...req.body }
console.log(patchedItem)
// Predicted Output: { id: 3, title: "Engineer", level: "Senior", salary: 9000 }

/*
Difference:
- PUT replaces the whole resource representation.
- PATCH applies a partial update and keeps existing fields.

Use PUT when replacing the full resource.
Use PATCH when updating only one or a few fields.
*/
