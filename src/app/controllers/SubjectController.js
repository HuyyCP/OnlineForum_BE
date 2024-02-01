import subjectSvc from '../services/SubjectSvc.js'

class SubjectController {
    static async getAllSubject(req, res) {
        res.json(await subjectSvc.getAllSubject())
    }
}

export default SubjectController