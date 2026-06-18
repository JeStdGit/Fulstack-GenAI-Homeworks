# **Homework — Node.js & Express Basics**

Based on: `05-server`

## **Exercise 1 — Predict the Output**

**Type:** Predict  
What does the client receive when it sends this request?

`GET /store/42`

Given this Express route:

```js
app.get("/store/:id", (req, res) => {
  try {
    const itemId = req.params.id
    const response = {
      itemId,
      status: "available"
    }
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Internal Server Error")
  }
})
```

1. What is the HTTP status code of the response?  
2. What is the exact JSON body the client receives?

## **Exercise 2 — Fix the Bug**

**Type:** Fix  
The developer wants a POST route at `/feedback` that reads the body sent by the client and returns it.  
But something is wrong — the server always responds with `undefined`.  
Find the bug and fix it.

```js
import express from "express"

const app = express()

app.post("/feedback", (req, res) => {
  try {
    const response = {
      received: req.params.feedback,
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
```

## **Exercise 3 — Fill in the Blanks**

**Type:** Fill  
Complete the missing parts so the route:

- Accepts `GET /product/:id`
- Returns `{ productId: <the id from the URL>, inStock: true }`
- Has proper `try/catch` error handling

```js
import express from "express"

const app = express()
app.use(express.json())

app.get(/* ??? */, (req, res) => {
  try {
    const productId = /* ??? */
    const response = {
      /* ??? */
      inStock: true
    }
    res.status(200).json(/* ??? */)
  } catch (error) {
    console.log(error.message)
    res.status(/* ??? */).send("Internal Server Error")
  }
})

app.listen(3000, () => {
  console.log("Server is listening on port 3000")
})
```

## **Exercise 4 — Write from Scratch**

**Type:** Write  
Add a new route to the server: `GET /greet/:name`  
It should return a JSON response in this shape:

```json
{ "message": "Hello, Yossi!" }
```

Where Yossi is whatever name came in the URL.  
Wrap the route in `try/catch` like the examples in the lesson.

## **Exercise 5 — Write from Scratch**

**Type:** Write  
Build a complete mini Express server from scratch in a new file.  
Requirements:

- Import Express and create an app
- Add the JSON middleware
- Add a `POST /echo` route — it reads `req.body` and responds with:

```json
{ "youSent": <exactly what the client sent>, "ok": true }
```

- Add proper `try/catch` to the route
- Listen on port `4000` and log `Echo server running on port 4000`