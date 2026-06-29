import express, { json } from 'express'
import fs from 'fs/promises'
import cors from 'cors'
import { log, error } from 'console'


const port = 3000

const app = express()
app.use(json())
app.use(cors())

app.get('/', async (_req, res) => {
    try {
        const stringifyPoliticians = await fs.readFile('./db/politicians.json')
        const politicians = JSON.parse(stringifyPoliticians)
        res.json(politicians)
    } catch (error) {
        error(error.message);
        res.status(500).send("Internal Server Error")
    }
})

app.get('/politician/:id', async (req, res) => {
    try {
        const requestedId = req.params.id
        const stringifyPoliticians = await fs.readFile('./db/politicians.json')
        const politicians = JSON.parse(stringifyPoliticians)
        const requestedPolitian = politicians.find((politician) => politician.id == requestedId)
        if (requestedPolitian) res.json(requestedPolitian)
        else res.status(404).send(`Poltician not found with id: ${requestedId}`)
    } catch (error) {
        res.status(500).send("Internal Server Error")
    }
})

app.post('/bulk-politicians', async (req, res) => {
    try {
        log({
            message: "Trying to fetch politicians from the db",
            endpoint: "/bulk-politicians"
        });
        log(req.body);

        const stringifyPoliticians = await fs.readFile('./db/politicians.json')
        const politicians = JSON.parse(stringifyPoliticians)
        log({
            message: "successfully fetched politicians from the db",
            endpoint: "/bulk-politicians",
            data: politicians
        });

        const politciansFilter = req.body.map(Number)
        const response = politicians.filter((user) => politciansFilter.includes((user.id)))
        if (response.length > 0) res.json(response)
        else res.status(404).send(`can't find Polticians with ids: ${politciansFilter}`)
    } catch (error) {
        error({
            message: error.message,
            endpoint: "/bulk-politicians"
        });
        res.status(500).send("Internal Server Error")
    }
})

app.get('/houses', async (req, res) => {
    try {
        log({
            message: "Trying to fetch houses from the db",
            endpoint: "/houses"
        });

        const stringifyHouses = await fs.readFile('./db/houses.json')
        const houses = JSON.parse(stringifyHouses)
        console.log({
            message: "Successfully fetched houses from the db",
            endpoint: "/houses",
            data: houses
        });
        res.json(houses)
    } catch (error) {
        error({
            message: error.message,
            endpoint: "/houses"
        });
        res.status(500).send("Internal Server Error")
    }
})

app.put('/role/:id', async (req, res) => {
    try {
        const roleId = Number(req.params.id)
        log({
            message: "Trying to fetch role from the db",
            endpoint: "/role/:id",
            roleId
        });

        const stringifyRoles = await fs.readFile('./db/roles.json')
        const roles = JSON.parse(stringifyRoles)
        log({
            message: "Successfully fetched role from the db",
            endpoint: "/role/id:",
            data: roles
        });
        const role = roles.find((r) => r.id === roleId)
        if (!role) {
            return res.status(404).send(`can't find role with id: ${roleId}`)
        }
        // log({
        //     message: "Trying to send role from the server",
        //     endpoint: "/role/id:",
        //     role
        // });

        const modifiedRoles = roles.map(r =>
            r.id == role.id ? {
                id: role.id,
                ...req.body
            } : r
        )

        await fs.writeFile('./db/roles.json', JSON.stringify(modifiedRoles, null, 4))
        res.json(modifiedRoles)
    } catch (error) {
        error({
            message: error.message,
            endpoint: "/role/:id"
        });
        res.status(500).send("Internal Server Error")
    }
})

app.patch('/role/:id', async (req, res) => {
    try {
        const roleId = Number(req.params.id)
        log({
            message: "Trying to fetch role from the db",
            endpoint: "/role/:id",
            roleId
        });

        const stringifyRoles = await fs.readFile('./db/roles.json')
        const roles = JSON.parse(stringifyRoles)
        log({
            message: "Successfully fetched role from the db",
            endpoint: "/role/id:",
            data: roles
        });
        const role = roles.find((r) => r.id === roleId)
        if (!role) {
            return res.status(404).send(`can't find role with id: ${roleId}`)
        }
        // log({
        //     message: "Trying to send role from the server",
        //     endpoint: "/role/id:",
        //     role
        // });

        const modifiedRoles = roles.map(r =>
            r.id == role.id ? {
                ...role,
                ...req.body
            } : r
        )

        await fs.writeFile('./db/roles.json', JSON.stringify(modifiedRoles, null, 4))
        res.json(modifiedRoles)
    } catch (error) {
        error({
            message: error.message,
            endpoint: "/role/:id"
        });
        res.status(500).send("Internal Server Error")
    }
})

app.delete('/role/:id', async (req, res) => {
    try {
        const roleId = Number(req.params.id)
        log({
            message: "Trying to fetch role from the db",
            endpoint: "/role/:id",
            roleId
        });

        const stringifyRoles = await fs.readFile('./db/roles.json')
        const roles = JSON.parse(stringifyRoles)
        log({
            message: "Successfully fetched role from the db",
            endpoint: "/role/id:",
            data: roles
        });
        const role = roles.find((r) => r.id === roleId)
        if (!role) {
            return res.status(404).send(`can't find role with id: ${roleId}`)
        }
        // log({
        //     message: "Trying to send role from the server",
        //     endpoint: "/role/id:",
        //     role
        // });

        const modifiedRoles = roles.filter(r => r.id !== role.id)

        await fs.writeFile('./db/roles.json', JSON.stringify(modifiedRoles, null, 4))
        res.json(modifiedRoles)
    } catch (error) {
        error({
            message: error.message,
            endpoint: "/role/:id"
        });
        res.status(500).send("Internal Server Error")
    }
})

app.post('/bulk-roles', async (req, res) => {
    try {
        log({
            message: "Trying to fetch roles from the db",
            endpoint: "/bulk-roles"
        });
        log(req.body);

        const stringifyRoles = await fs.readFile('./db/roles.json')
        const roles = JSON.parse(stringifyRoles)
        log({
            message: "successfully fetched roles from the db",
            endpoint: "/bulk-roles",
            data: roles
        });

        const rolesFilter = req.body.map(Number)
        const response = roles.filter((role) => rolesFilter.includes((role.id)))
        if (response.length > 0) res.json(response)
        else res.status(404).send(`can't find Polticians with ids: ${rolesFilter}`)
    } catch (error) {
        error({
            message: error.message,
            endpoint: "/bulk-roles"
        });
        res.status(500).send("Internal Server Error")
    }
})

app.get('/all-roles', async (_req, res) => {
    try {
        log({
            message: "Trying to fetch roles from the db",
            endpoint: "/all-roles"
        })
        const stringifyRoles = await fs.readFile('/db/roles.json')
        const roles = JSON.parse(stringifyRoles)
        log({
            message: "Successfully fetched roles from the db",
            endpoint: "/all-roles"
        })
        res.json(roles)
    } catch (error) {
        log({
            message: error.message,
            endpoint: "/all-roles"
        })
        res.status(500).send("Internal Server Error")
    }
})


app.listen(port, () => log(`Server is listening on port ${port}`));