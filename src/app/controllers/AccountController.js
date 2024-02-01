import accountService from '../services/AccountSvc.js'

class AccountController {
    static async login(req, res) {
        const { username, password } = req.body
        var token = await accountService.isValidAccount(username, password)
        var responseCode = token != null ? 200 : 401
        res.status(responseCode).json({
            'token': token
        })
    }

    static async verifyToken(req, res) {
        var token = req.headers.authorization
        var { newToken, user } = await accountService.verifyToken(token)
        var responseCode = newToken != null ? 200 : 401
        res.status(responseCode).json({
            'token': newToken,
            'user': user
        })
    }
}

export default AccountController