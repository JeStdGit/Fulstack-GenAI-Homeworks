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

1. What is the HTTP status code of the response?<br>
*- Answer:* `200`
2. What is the exact JSON body the client receives?<br>
*- Answer:* 
```json
{
    "itemId": "42",
    "status": "available"
}
```