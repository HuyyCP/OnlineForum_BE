import subjectController from "../app/controllers/SubjectController.js"
import { Router } from "express"
const route = Router()

route.get('/get-all', subjectController.getAllSubject)

export default route