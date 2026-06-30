app.get("/products", async (req, res) => {
    try {
        const stringifyProducts = await fs.readFile(`${__dirname}/db/products.json`)
        const products = JSON.parse(stringifyProducts)
        res.json(products)
    } catch (error) {
        console.error({
            message: "Failed to fetch products",
            endpoint: "/products",
            errorMsg: error.message
        })
        res.status(500).send("Internal server error")
    }
})
