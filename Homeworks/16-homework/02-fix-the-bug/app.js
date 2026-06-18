import express, { json } from "express"

const app = express()
app.use(json()) // required in order to parse sent (post...) jsons into object (req.body)

app.post("/feedback", (req, res) => {
    try {
        const response = {
            received: req.body.feedback,
            message: "Thanks!"
        }
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})