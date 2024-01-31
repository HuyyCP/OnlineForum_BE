import Account from "../models/Account.js"

class AccountRepo {

    static async getAccountByUsername(username, password) {
        var query = {
            attributes: ['username', 'password']
        }
        const account = await Account.findAll(query)
        return account
    }

    static async addAccount(account) {
        Account.create(account)
    }
}

export default AccountRepo