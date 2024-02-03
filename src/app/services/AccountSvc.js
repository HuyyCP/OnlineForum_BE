import accountRep from "../repositories/AccountRep.js"
import userRep from "../repositories/UserRep.js"
import { v4 as uuid } from 'uuid'
import jwt from 'jsonwebtoken'

class AccountSvc {
  static async isValidAccount(username, password) {
    var account = await accountRep.getAccountByUsername(username, password)
    var token = null
    if (account != null) {
      token = await this.generateToken(account.idaccount)
    }
    return token
  }

  static async addAccount(account) {
    account.idaccount = uuid()
    accountRep.addAccount(account)
  }

  static async generateToken(claim) {
    return jwt.sign(JSON.stringify({claim : claim}) , process.env.SECRET_KEY)
  }

  static async checkToken(token) {
    var user = null
    await jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      console.log(decoded)
      user = err ? null : await userRep.getUserByIdAccount(decoded.claim)
    });
    return user
  } 

  static async verifyToken(token) {
    var user = await this.checkToken(token)
    var newToken = user ? await this.generateToken(user.Account.idaccount) : null
    return { newToken, user }
  }

}

export default AccountSvc