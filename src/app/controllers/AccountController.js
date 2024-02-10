import accountSvc from '../services/AccountSvc.js'
import userSvc from '../services/UserSvc.js'

class AccountController {
    static async login(req, res) {
        const { username, password } = req.body
        var token = await accountSvc.isValidAccount(username, password)
        var responseCode = token != null ? 200 : 401
        res.status(responseCode).json({
            'token': token
        })
    }

    static async verifyToken(req, res) {
        var token = req.headers.authorization
        var { newToken, user } = await accountSvc.verifyToken(token)
        var responseCode = newToken != null ? 200 : 401
        res.status(responseCode).json({
            'token': newToken,
            'user': user
        })
    }

    static async register(req, res) {
        const {name, username, password, email, dateofbirth, phonenumber} = req.body
        const iduser = await userSvc.addUser({name, email, dateofbirth, phonenumber})
        if(iduser == null) {
            res.status(400).json({message: "Error"})
        }
        if(await accountSvc.addAccount({username, password, iduser})) {
            res.status(200).json({message: "Success"})
        } else {
            res.status(400).json({message: "Error"})
        }
    }

    static async changePassword(req, res) {
        const token = req.headers.authorization
        var user = await accountSvc.checkToken(token)
        if(user == null) {
            res.status(401).json({message: "Error"})
            return
        }
        console.log(user.Account.idaccount)
        const {password} = req.body
        if(await accountSvc.changePassword(user.Account.idaccount, password)) {
            res.status(200).json({message: "Success"})
        } else {
            res.status(400).json({message: "Error"})
        }
    }
}

export default AccountController