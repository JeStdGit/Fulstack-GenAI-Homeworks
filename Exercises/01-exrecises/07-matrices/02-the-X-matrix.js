const matrix = []
for (let index = 0; index < 10; index++) {
    matrix.push(new Array(10))
    const left = index
    const right = 9 - index
    for (let subIndex = 0; subIndex < matrix[index].length; subIndex++) {
        if (subIndex == left || subIndex == right) matrix[index][subIndex] = 1
        else matrix[index][subIndex] = 0
    }
}
console.table(matrix);

/*
┌─────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
├─────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
│ 0       │ 1 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 1 │
│ 1       │ 0 │ 1 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 1 │ 0 │
│ 2       │ 0 │ 0 │ 1 │ 0 │ 0 │ 0 │ 0 │ 1 │ 0 │ 0 │
│ 3       │ 0 │ 0 │ 0 │ 1 │ 0 │ 0 │ 1 │ 0 │ 0 │ 0 │
│ 4       │ 0 │ 0 │ 0 │ 0 │ 1 │ 1 │ 0 │ 0 │ 0 │ 0 │
│ 5       │ 0 │ 0 │ 0 │ 0 │ 1 │ 1 │ 0 │ 0 │ 0 │ 0 │
│ 6       │ 0 │ 0 │ 0 │ 1 │ 0 │ 0 │ 1 │ 0 │ 0 │ 0 │
│ 7       │ 0 │ 0 │ 1 │ 0 │ 0 │ 0 │ 0 │ 1 │ 0 │ 0 │
│ 8       │ 0 │ 1 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 1 │ 0 │
│ 9       │ 1 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 0 │ 1 │
└─────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
*/