import userService from "../services/UserService.js"

class UserController {
    static async index(req, res) {
        res.send(await userService.getUser())
    }
}

export default UserController