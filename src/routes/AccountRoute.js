import accountController from "../app/controllers/AccountController.js"
import { Router } from "express"
const route = Router()

route.post('/login', accountController.login)
route.post('/verify-token', accountController.verifyToken)
route.post('/register', accountController.register)
route.patch('/change-password', accountController.changePassword)

export default route