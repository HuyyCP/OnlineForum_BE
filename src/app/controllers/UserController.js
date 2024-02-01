import userSvc from "../services/UserSvc.js"

class UserController {
    static async index(req, res) {
        res.json(await userSvc.getUser())
    }
}

export default UserController