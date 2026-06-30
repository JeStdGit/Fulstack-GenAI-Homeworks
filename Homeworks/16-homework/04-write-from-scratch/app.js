import express from "express"

const app = express()
app.use(express.json())

app.get("/product/:id", (req, res) => {
    try {
        const productId = req.params.id
        const response = {
            productId,
            inStock: true
        }
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

app.get("/greet/:name", (req, res) => {
    try {
        const name = req.params.name
        const response = {
            message: `Hello ${name}`
        }
        res.status(200).json(response)
    } catch (error) {
        console.log("Error:", error.message);
        res.status(500).send("Internal Server Errror")
    }
})

app.listen(3000, () => console.log("Server is listening on port 3000"))