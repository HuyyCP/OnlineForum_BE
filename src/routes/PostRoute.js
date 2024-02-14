import postController from "../app/controllers/PostController.js"
import { Router } from "express"
const route = Router()

route.get('/', postController.getAllCommentByPost)
route.post('/add', postController.addPost)

export default route