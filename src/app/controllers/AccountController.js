import accountSvc from '../services/AccountSvc.js'

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
}

export default AccountController