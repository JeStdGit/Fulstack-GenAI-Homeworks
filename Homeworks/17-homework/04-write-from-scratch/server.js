import express from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/weather', (req, res) => {
    try {
        const city = req.body.city
        res.json(
            {
                city: city,
                temperature: "23°"
            }
        )
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error")
    }
})


app.listen(3000, () => console.log("Server listening on port 3000"))