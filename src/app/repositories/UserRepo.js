import User from "../models/User.js"

class UserRepo {
    static async getUser() {
        var query = {
            attributes: ['name', 'email']
        }
        const user = await User.findAll(query)
        console.log(JSON.parse(JSON.stringify(user)))
        return JSON.parse(JSON.stringify(user))
    }
}

export default UserRepo