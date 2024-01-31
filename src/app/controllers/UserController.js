import userService from "../services/UserService.js"

class UserController {
    static async index(req, res) {
        res.json(await userService.getUser())
    }
}

export default UserController