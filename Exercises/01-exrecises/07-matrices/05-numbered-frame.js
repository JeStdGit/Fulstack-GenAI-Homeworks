const matrix = []
for (let index = 0; index < 10; index++) {
    matrix.push(new Array(10))
    for (let subIndex = 0; subIndex < matrix[index].length; subIndex++) {
        // TODO: fix logic
        if (index === 0 || index === 9) {
            matrix[index][subIndex] = index
        } else matrix[index][subIndex] = subIndex
    }
}
console.log(matrix);