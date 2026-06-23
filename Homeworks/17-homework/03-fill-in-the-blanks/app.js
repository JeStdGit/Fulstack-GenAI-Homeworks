import express from 'express'
import fs from 'fs/promises'

const app = express()

app.get('/roles', async (req, res) => {
    try {
        const raw = await fs.readFile('db/roles.json')
        const roles = JSON.parse(raw)
        res.json(roles)
    } catch (error) {
        console.error(error.message)
        res.status(500).send('Internal server error')
    }
})

app.listen(3000, () => console.log("Server listening on port 3000"))