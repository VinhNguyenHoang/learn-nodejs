/**
 * Get all products
 * @param req - http request
 * @param res - server response
 */
async function getProducts(req, res) {
    try {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({message: "Product controller"}))
        res.end()
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getProducts
}