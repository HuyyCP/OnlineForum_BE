import accountController from "../app/controllers/AccountController.js"
import { Router } from "express"
const route = Router()

route.post('/login', accountController.login)
route.post('/verify-token', accountController.verifyToken)
route.post('/register', accountController.register)

export default route