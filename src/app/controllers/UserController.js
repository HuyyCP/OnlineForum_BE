import userService from "../services/UserService.js"

class UserController {
    static async index(req, res, next) {
        res.send(await userService.getUser())
    }
}

export default UserController