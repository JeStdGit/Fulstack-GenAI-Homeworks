const matrix = []
for (let index = 0; index < 10; index++) {
    matrix.push(new Array(10))
    for (let subIndex = 0; subIndex < matrix[index].length; subIndex++) {
        matrix[index][subIndex] = index * 10 + subIndex
    }
}
console.log(matrix);
