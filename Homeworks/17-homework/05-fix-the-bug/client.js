const selectedIds = []

async function getAllOrdersIds() {
    const orderIdsResMid = await fetch('http://localhost:3000/allOrderIds', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

    return await orderIdsResMid.json()
}


(async () => {
    try {
        const allOrdersIds = await getAllOrdersIds();
        const list = document.getElementById('order-ids-list')
        for (const orderId of allOrdersIds) {
            const orderIdItem = document.createElement('div')
            const checkBox = document.createElement('input')
            checkBox.type = 'checkbox'
            checkBox.id = orderId
            checkBox.onchange = (e) => {
                e.preventDefault()
                if (e.target.checked) selectedIds.push(checkBox.id)
                else {
                    const index = selectedIds.indexOf(checkBox.id);
                    if (index > -1) selectedIds.splice(index, 1);
                }
            }
            orderIdItem.appendChild(checkBox)
            const label = document.createElement('label')
            label.htmlFor = orderId
            label.innerText = orderId
            orderIdItem.appendChild(label)
            list.appendChild(orderIdItem)
        }

        console.log(allOrdersIds);
    } catch (error) {
        console.error("Failed to fetch order IDs:", error);
    }
})();

document.getElementById('order-btn').addEventListener('click', async (e) => {
    e.preventDefault()

    const res = await fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(selectedIds)
    })

    const data = await res.json()
    document.getElementById('confirmation').innerText = data
        .map((order) => {
            return Object.entries(order)
                .map(([key, value]) => {
                    if (value instanceof Array) {
                        const extendedValue = value
                            .map((o) => {
                                return Object.entries(o)
                                    .map(([key, value]) => `--- ${key}: ${value}`)
                                    .join('\n');
                            })
                            .join('\n--------\n')
                        return `${key}:\n ${extendedValue}`
                    }
                    if (value instanceof Object) {
                        return `${key}:\n ${Object.entries(value)
                            .map(([key, value]) => `--- ${key}: ${value}`)
                            .join('\n')}`
                    }
                    return `${key}: ${JSON.stringify(value)} `
                })
                .join('\n');
        })
        .join('\n\n')
})