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

## **Answers**

### **Exercise 1**

**Status code:** `200`  
**Response body:**

```json
{
  "itemId": "42",
  "status": "available"
}
```

Note: `itemId` is the string `"42"`, not the number `42` — URL params are always strings.

### **Exercise 2**

Two bugs:

1. `req.params.feedback` is wrong — route params come from the URL path (for example, `/feedback/:id`). To read the request body, use `req.body`.
2. `app.use(express.json())` is missing — without this middleware, `req.body` is `undefined`.

Fixed version:

```js
import express from "express"

const app = express()
app.use(express.json()) // <-- missing line added

app.post("/feedback", (req, res) => {
  try {
    const response = {
      received: req.body.feedback, // <-- req.body, not req.params
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

### **Exercise 3**

```js
import express from "express"

const app = express()
app.use(express.json())

app.get("/product/:id", (req, res) => {
  try {
    const productId = req.params.id
    const response = {
      productId,
      inStock: true
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

### **Exercise 4**

```js
app.get("/greet/:name", (req, res) => {
  try {
    const name = req.params.name
    const response = {
      message: `Hello, ${name}!`
    }
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Internal Server Error")
  }
})
```

### **Exercise 5**

```js
import express from "express"

const app = express()
app.use(express.json())

app.post("/echo", (req, res) => {
  try {
    const response = {
      youSent: req.body,
      ok: true
    }
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Internal Server Error")
  }
})

app.listen(4000, () => {
  console.log("Echo server running on port 4000")
})
```