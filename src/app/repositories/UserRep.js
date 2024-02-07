import User from "../models/User.js"
import Account from "../models/Account.js"
import Role from "../models/Role.js"

class UserRep {
    static async getUser() {
        var query = {
            attributes: ['name', 'email']
        }
        return await User.findAll(query)
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
        return await User.findOne(query)
    }

    static async addUser(user) {
        try {
            await User.create(user)
            return true
        } catch (err) {
            return false
        }
    }
}

export default UserRep