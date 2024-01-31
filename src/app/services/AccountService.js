import accountRepo from "../repositories/AccountRepo.js"
import { v4 as uuid } from 'uuid'
import jwt from 'jsonwebtoken'

class AccountService {
    static async isValidAccount(username, password) {
        var account =  await accountRepo.getAccountByUsername(username, password) 
        var token = null
        if (account != undefined) {
            token = await this.generateToken(account.idaccount)
        } 
        return token
    } 

    static async addAccount(account) {
        account.idaccount = uuid()
        accountRepo.addAccount(account)
    }

    static async generateToken(claim) {
        return jwt.sign({claim}, process.env.SECRET_KEY, { expiresIn: process.env.EXPIRATION_TIME })
    }


}

export default AccountService