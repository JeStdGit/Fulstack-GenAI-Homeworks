# Exercise 1 — Request Counter Middleware

### Code
```js
// middlewares/requestId.js
export default (req, res, next) => {
    try {
        const id = Math.random() * (top - min + 1) + min
        res.locals.requestId = id
        console.log({ message: 'Incoming request', requestId: id })
        next()
    } catch(error) {
        console.error(error)
    }
}
```

### Answers:
- How would you mount `requestId` so it runs on **every** route in the whole app?
  <br/> **- answer:** *like this:*
  ```js
  import express from 'express'
  import requestId from './middlewares/requestId.js'
  
  const app = express()
  app.use(requestId)
  ```
- How would you mount it so it only runs for routes inside a single `Router` (e.g. `housesRouter`), without touching `server.js`?
  <br/> **- answer:** *this is how you mount for a single Router:*
  ```js
  import { Router } from 'express'
  import requestId from './middlewares/requestId.js'

  const router = Router()
  router.use(requestId)
  ```