import accountRepo from "../repositories/AccountRepo.js"
import userRepo from "../repositories/UserRepo.js"
import { v4 as uuid } from 'uuid'
import jwt from 'jsonwebtoken'

class AccountService {
    static async isValidAccount(username, password) {
        var account = await accountRepo.getAccountByUsername(username, password)
        var token = null
        if (account != null) {
            token = await this.generateToken(account.idaccount)
        }
        return token
    }

    static async addAccount(account) {
        account.idaccount = uuid()
        accountRepo.addAccount(account)
    }

    static async generateToken(claim) {
        return jwt.sign({ claim }, process.env.SECRET_KEY, { expiresIn: process.env.EXPIRATION_TIME })
    }

    static async verifyToken(token) {
        return new Promise((resolve, reject) => {
          jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
            let newToken = null;
            let user = null;
      
            if (err) {
              resolve({ newToken, user });
            } else {
              try {
                user = await userRepo.getUserByIdAccount(decoded.claim);
                if (user != null) {
                  newToken = await this.generateToken(user.idaccount);
                }
                console.log(newToken);
                console.log(user);
                resolve({ newToken, user });
              } catch (error) {
                reject(error);
              }
            }
          });
        });
      }


}

export default AccountService