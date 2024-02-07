import userRep from "../repositories/UserRep.js"
import { v4 as uuid } from 'uuid'


class UserService {
    static async getUser() {
        return await userRep.getUser()
    }

    static async addUser(user) {
        user.iduser = uuid()
        user.datecreate = new Date().toISOString().slice(0, 19).replace('T', ' ')
        user.idrole = "4ce1e18b-371c-4dd2-a69a-203166338f44" // Role member
        return await userRep.addUser(user) ? user.iduser : null
    }
}

export default UserService