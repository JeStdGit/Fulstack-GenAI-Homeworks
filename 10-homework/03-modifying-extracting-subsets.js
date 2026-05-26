let months = ['Jan', 'March', 'April', 'June']

const janIndex = months.indexOf('Jan')
if (janIndex != -1) months.splice(janIndex + 1, 0, 'Feb')

console.log(months);

const sliced = months.slice(2, 4)
console.log(sliced);
