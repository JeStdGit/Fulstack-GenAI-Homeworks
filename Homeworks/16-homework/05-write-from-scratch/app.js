import express from "express"

const app = express()
app.use(express.json())

app.post("/echo", (req, res) => {
    try {
        const youSent = req.body
        const response = {
            youSent,
            ok: true
        }
        res.status(200).json(response)
    } catch (error) {
        console.log("Error", error.message);
        res.status(500).send("Internal Server Error")
    }
})

app.listen(4000, () => console.log("Echo server running on port 4000"))