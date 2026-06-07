const products = [{ id: 1, price: 20 }, { id: 2, price: 50 }, { id: 3, price: 15 }]

const cost20AndUp = products.filter(product => product.price >= 20)
console.log(cost20AndUp);

const cost20AndUpIds = cost20AndUp.map(product => product.id)
console.log(cost20AndUpIds);
