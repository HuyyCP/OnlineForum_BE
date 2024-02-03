import subjectSvc from '../services/SubjectSvc.js'
import accountSvc from '../services/AccountSvc.js'

class SubjectController {
    static async getAllSubject(req, res) {
        var token = req.headers.authorization
        var { newToken, user } = await accountSvc.verifyToken(token)
        var responseCode = newToken != null ? 200 : 401    
        if(responseCode == 200) {
            res.status(200).json(await subjectSvc.getAllSubject())
        } else {
            res.status(401).json({message: "Error"});
        }
    }
}

export default SubjectController