import subSubjectSvc from "../services/SubSubjectSvc.js"

class SubSubjectController {
    static async getAllPostBySubSubject(req, res) {
        var idSubSubject = req.query.id
        console.log(req.query)
        res.json(await subSubjectSvc.getAllPostBySubSubject(idSubSubject))
    }
}

export default SubSubjectController