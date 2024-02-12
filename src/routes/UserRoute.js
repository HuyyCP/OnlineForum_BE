import userController from "../app/controllers/UserController.js"
import { Router } from "express"
const route = Router()

route.get('/get', userController.getUser)
route.put('/update', userController.updateUser)

export default route

