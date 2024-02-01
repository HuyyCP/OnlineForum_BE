import postController from "../app/controllers/PostController.js"
import { Router } from "express"
const route = Router()

route.get('/', postController.getAllCommentByPost)

export default route