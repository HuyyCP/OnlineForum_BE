import userSvc from "../services/UserSvc.js"
import accountSvc from "../services/AccountSvc.js"

class UserController {
    static async index(req, res) {
        res.json(await userSvc.getUser())
    }

    static async updateUser(req, res) {
        const token = req.headers.authorization
        var user = await accountSvc.checkToken(token)
        if(user == null) {
            res.status(401).json({message: "Error"})
            return
        }
        const {name, email, dateofbirth, phonenumber} = req.body
        if(await userSvc.updateUser({iduser : user.iduser, name, email, dateofbirth, phonenumber})) {
            res.status(200).json({message: "Success"})
        } else {
            res.status(400).json({message: "Error"})
        }
    }

    
}

export default UserController