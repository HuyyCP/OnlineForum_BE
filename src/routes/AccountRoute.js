import accountController from "../app/controllers/AccountController.js"
import { Router } from "express";
const route = Router();

route.get('/login', accountController.login)


export default route