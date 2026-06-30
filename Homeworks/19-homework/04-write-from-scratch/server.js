app.patch('/product/:id', async (req, res) => {
    try {
        const stringifyProducts = await fs.readFile(`${__dirname}/db/products.json`)
        const products = JSON.parse(stringifyProducts)

        const targetId = Number(req.params.id)
        const productExists = products.some(product => product.id === targetId)

        if (!productExists) {
            return res.status(404).send(`Product not found with Id: ${targetId}`)
        }

        const updatedProducts = products.map(product =>
            product.id === targetId ? {
                ...product,
                ...req.body
            } : product
        )

        await fs.writeFile(`${__dirname}/db/products.json`, JSON.stringify(updatedProducts))
        res.json(updatedProducts)
    } catch (error) {
        console.log({
            message: error.message,
            endpoint: '/product/:id'
        });
        res.status(500).send("Internal Server Error")
    }
})