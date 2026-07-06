# Exercise 5 — Middleware Order Matters

### Code

```javascript
const stepOne = (req, res, next) => {
    res.locals.trail = 'start'
    next()
}

const stepTwo = (req, res, next) => {
    res.locals.trail = res.locals.trail + '-middle'
    res.locals.count = 2
    next()
}

app.get('/journey', [stepOne, stepTwo], (req, res) => {
    res.json(res.locals)
})
```

### Answers

What JSON body does a client receive when it calls `GET /journey`? Then, answer: if you swapped the order to `[stepTwo, stepOne]`, would the response change — and why?
  <br/> **- answer:** the client will get this json:
  ```json
  {
    "trail": "start-middle",
    "count": 2
  }
  ```

  but if you'll swap the middlewares order this is what will happened:

  - the `stepTwo` will run first the locals object will look like this: <br/>

    ```javascript
    {
      trail: "undefined-middle", // initially 'res.locals.trail' is undefined...
      count: 2
    }
    ```

  - then in `stepOne` it'll override the `trail` value with the `'start'` value and the output json will be:

    ```json
    {
      "trail": "start",
      "count": 2
    }
    ```