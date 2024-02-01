import userService from "../services/UserSvc.js"

class UserController {
    static async index(req, res) {
        res.json(await userService.getUser())
    }
}

export default UserController