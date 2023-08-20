import { router } from '../router/handler'
import { productController } from './product'

console.log("running here")

try {
    // registering handlers
    router.SetRoute("GET", "products", productController.GetProducts)
} catch (error) {
    console.log(error)
}