import accountService from '../services/AccountService.js'

class AccountController {
    static async login(req, res) {
        const { username, password } = req.body
        var token = await accountService.isValidAccount(username, password)
        res.json({'token': token})
    }
}

export default AccountController