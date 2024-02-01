import commentController from "../app/controllers/CommentController.js"
import { Router } from "express"
const route = Router()

route.post('/add', commentController.addComment)
route.delete('/delete', commentController.deleteComment)

export default route