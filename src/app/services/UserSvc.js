import userRep from "../repositories/UserRep.js"

class UserService {
    static async getUser() {
        return await userRep.getUser()
    }
}

export default UserService