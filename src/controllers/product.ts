import { IncomingMessage, ServerResponse } from "http";

class ProductController {

    /**
     * Get all products
     * @method GET
     * @param req - http request
     * @param res - server response
     */
    GetProducts(req: IncomingMessage, res: ServerResponse) {
        try {
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify({message: "Product controller"}))
        } catch (error) {
            console.log(error)
        }
    }
}

export const productController = new ProductController();