import express from 'express'
import fs from 'fs/promises'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


app.post('/order', async (req, res) => {
    try {
        const orderIds = req.body
        const rawOrders = await fs.readFile('./db/orders.json')
        const orders = JSON.parse(rawOrders)
        const requestedOrders = orders.filter((o) => orderIds.includes(o.orderId))
        res.json(requestedOrders)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }

})


app.get('/allOrderIds', async (req, res) => {
    try {
        const rawOrders = await fs.readFile('./db/orders.json')
        const orders = JSON.parse(rawOrders)
        const ordersIds = orders.map((order) => order.orderId)
        res.json(ordersIds)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }

})


app.listen(3000, () => console.log("Server listening on port 3000"))