import subjectRep from "../repositories/SubjectRep.js"

class SubjectSvc {
    static async getAllSubject() {
        return await subjectRep.getAllSubject()
    }
}

export default SubjectSvc