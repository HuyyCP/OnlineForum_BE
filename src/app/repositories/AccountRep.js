import Account from "../models/Account.js"

class AccountRep {

    static async getAccountByUsername(username, password) {
        var query = {
            where: {
                username: username,
                password: password
            }
        }
        return await Account.findOne(query)
    }

    static async addAccount(account) {
        try {
            await Account.create(account)
            return true
        } catch (err) {
            return false
        }
    }

    static async getAccountById(idAccount) {
        return await Account.findByPk(idAccount)
    }
    
    static async changePassword(idaccount, password) {
        try {
            await Account.update(
                {
                    password: password
                }, {
                    where : {
                        idaccount: idaccount
                    }
                }
            )
            return true
        } catch (err) {
            return false
        }
    }
}

export default AccountRep