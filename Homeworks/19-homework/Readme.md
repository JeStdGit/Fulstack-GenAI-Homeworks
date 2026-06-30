# **Homework — Client-Server E2E / Express + Fetch API**

---

**Exercise 1 — Predict the output**

**Type:** Predict  
What will be logged to the console, and in what order? Explain why.

```js
async function loadData() {
  console.log("A")

  const res1 = fetch("http://localhost:3000/leagues")
  const res2 = fetch("http://localhost:3000/teams")

  console.log("B")

  const [leaguesRes, teamsRes] = await Promise.all([res1, res2])

  console.log("C")

  const leagues = await leaguesRes.json()
  const teams = await teamsRes.json()

  console.log("D")
  console.log({ leagues, teams })
}

loadData()
console.log("E")
```

What is logged first — `"B"` or `"E"`? What is the advantage of calling `fetch` before `await Promise.all`?

---

**Exercise 2 — Fix the bug**

**Type:** Fix  
The server below has a bug. Find it and fix it.

```js
app.get("/products", async (req, res) => {
  try {
    const stringifyProducts = await fs.readFile(`${__dirname}/db/products.json`)
    const products = JSON.parse(stringifyProducts)
    res.json(products)
  } catch (error) {
    console.error({
      message: "Failed to fetch products",
      endpoint: "/products",
      errorMsg: err.message
    })
    res.status(500).send("Internal server error")
  }
})
```

What is the bug? What would happen at runtime if the `readFile` threw an error?

---

**Exercise 3 — Fill in the blanks**

**Type:** Fill  
Complete the client-side code below. It should:

1. Fetch all leagues from `GET /leagues`
2. For each league, fire a `POST /bulk-teams` request with `league.teams` (an array of IDs) in the body — all requests in **parallel**
3. Await all the `POST` responses, then parse their JSON bodies — also in **parallel**
4. Log the final array of team arrays

```js
document.getElementById("load-btn").addEventListener("click", async (e) => {
  try {
    const leaguesRes = await fetch("http://localhost:3000/leagues", {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })

    const leagues = await leaguesRes.json()

    const teamRequests = []
    for (const league of leagues) {
      teamRequests.push(
        fetch("http://localhost:3000/bulk-teams", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: // ???
        })
      )
    }

    const teamHeaders = await // ???

    const teamBodyRequests = []
    for (const header of teamHeaders) {
      teamBodyRequests.push(// ???)
    }

    const teamsResponse = await // ???

    console.log(teamsResponse)
  } catch (error) {
    console.error({ data: error.message })
  }
})
```

---

**Exercise 4 — Write from scratch**

**Type:** Write  
Write an Express `PATCH` endpoint `PATCH /product/:id` that:

* Reads `products.json` from the `db` folder
* Finds the product with the matching `id`
* Returns `404` if not found
* **Merges** `req.body` into the existing product (keep existing fields, override only what's in `req.body`)
* Writes the updated array back to `products.json`
* Responds with the updated array as JSON

Assume `app`, `fs`, and `__dirname` are already set up — just write the route handler.

---

**Exercise 5 — Predict the output**

**Type:** Predict  
Given the two route handlers below (`PUT` and `PATCH`), what will each return when called with `req.body = { salary: 9000 }` on the item `{ id: 3, title: "Engineer", level: "Senior", salary: 7000 }`?

```js
// PUT handler
const newItems = items.map((item) =>
  item.id == targetId
    ? { id: item.id, ...req.body }
    : item
)

// PATCH handler
const newItems = items.map((item) =>
  item.id == targetId
    ? { ...item, ...req.body }
    : item
)
```

1. What does the `PUT` handler return for the matched item?
2. What does the `PATCH` handler return for the matched item?
3. What is the real-world difference between `PUT` and `PATCH`, and when would you use each?