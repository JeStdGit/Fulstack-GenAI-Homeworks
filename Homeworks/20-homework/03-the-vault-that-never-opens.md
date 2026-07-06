# Exercise 3 - The Vault That Never Opens

### Code *(Fixed)*

```javascript
const requireCode = (req, res, next) => {
    try {
        if (['A1', 'B2'].includes(req.body.code)) {
            res.locals.access = 'granted'
            next() // was missing - leaves the client with no response when access code is valid
        } else {
            res.locals.access = 'denied' // might be useless
            res.status(401).send('Access denied')
        }
    } catch (error) {
        res.status(500)
    }
}

app.post('/vault', [requireCode], (req, res) => {
    try {
        res.send(res.locals)
        // res.send(res.locals) // duplicate response, will cause an error while trying to send the second response
    } catch (error) {
        res.status(500)
    }
})
```