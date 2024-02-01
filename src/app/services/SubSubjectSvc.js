import subSubjectRep from "../repositories/SubSubjectRep.js"

class SubSubjectSvc {
    static async getAllPostBySubSubject(idSubSubject) {
        return await subSubjectRep.getAllPostBySubSubject(idSubSubject)
    }
}

export default SubSubjectSvc