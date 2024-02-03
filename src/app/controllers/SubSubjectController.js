import subSubjectSvc from "../services/SubSubjectSvc.js"
import accountSvc from "../services/AccountSvc.js"

class SubSubjectController {
    static async getAllPostBySubSubject(req, res) {
        var token = req.headers.authorization
        var { newToken, user } = await accountSvc.verifyToken(token)
        var responseCode = newToken != null ? 200 : 401
        if(responseCode == 200) {
            var idSubSubject = req.query.id
            res.status(200).json(await subSubjectSvc.getAllPostBySubSubject(idSubSubject))
        } else {
            res.status(401).json({message: "Error"})
        }
    }
}

export default SubSubjectController