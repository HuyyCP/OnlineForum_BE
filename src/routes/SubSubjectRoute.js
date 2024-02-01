import subSubjectController from "../app/controllers/SubSubjectController.js"
import { Router } from "express"
const route = Router()

route.get('', subSubjectController.getAllPostBySubSubject)

export default route