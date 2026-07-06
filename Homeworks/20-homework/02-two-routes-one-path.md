# Exercise 2 — Two Routes, One Path

### Code
```javascript
app.post('/vault', (req, res, next) => {
    try {
        if (['111', '222'].includes(req.body.code)) {
            next()
        } else {
            res.send('Access Denied')
        }
    } catch (error) {
        res.status(500)
    }
})

app.post('/vault', (req, res) => {
    try {
        console.log('Opening the vault...')
        res.json({ secret: 'The gold is in the basement' })
    } catch (error) {
        res.status(500)
    }
})
```

### Answers

1. `POST /vault` with body `{ "code": "111" }`
  <br/> **- answer:** *log:* `Opening the vault...` *response:* `{ secret: 'The gold is in the basement' }`
2. `POST /vault` with body `{ "code": "999" }`
  <br/> **- answer:** *no logs, response:* `Access Denied`