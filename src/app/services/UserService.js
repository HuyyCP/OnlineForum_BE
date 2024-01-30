import UserRep from "../repositories/UserRepo.js"

class UserService {
    static async getUser() {
        return await UserRep.getUser()
    }
}

export default UserService