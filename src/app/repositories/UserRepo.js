import User from "../models/User.js"
import Account from "../models/Account.js"
import Role from "../models/Role.js"

class UserRepo {
    static async getUser() {
        var query = {
            attributes: ['name', 'email']
        }
        const user = await User.findAll(query)
        return JSON.parse(JSON.stringify(user))
    }

    static async getUserByIdAccount(idAccount) {
        var query = {
            include: [
                {
                    model: Account,
                    where : {
                        idaccount: idAccount
                    }, 
                },
                {
                    model : Role,
                }
            ], 
        }
        const user = await User.findOne(query)
        return JSON.parse(JSON.stringify(user))
    }
}

export default UserRepo