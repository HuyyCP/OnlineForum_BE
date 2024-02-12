import User from "../models/User.js"
import Account from "../models/Account.js"
import Role from "../models/Role.js"

class UserRep {
    static async getUserByIdAccount(idAccount) {
        var query = {
            attributes: ['iduser', 'name', 'email', 'dateofbirth', 'phonenumber'],
            include: [
                {
                    model: Account,
                    attributes: ['idaccount'],
                    where : {
                        idaccount: idAccount
                    }, 
                },
                {
                    model : Role,
                    attributes: ['rolename']
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

    static async updateUser(user) {
        try {
            await User.update(
                {
                    name: user.name, 
                    email: user.email,
                    dateofbirth: user.dateofbirth,
                    phonenumber: user.phonenumber
                }, {
                    where: {
                        iduser : user.iduser
                    }
                }
            )
            return true
        } catch (err) {
            return false
        }
    }
}

export default UserRep