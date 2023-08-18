import { RegisterController } from '../router/handler'
import { getProducts } from './product'

RegisterController("products", getProducts)