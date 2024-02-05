import SubSubject from "../models/SubSubject.js"
import Subject from "../models/Subject.js"

class SubjectRep {
    static async getAllSubject() {
        var query = {
            attributes: ['idsubject', 'subjectname'],
            where: {
                status : 1,
            },
            include : {
                model: SubSubject,
                attributes: ['idsubject', 'subjectname'],
                where: {
                    status : 1
                }
            }
        }
        return await Subject.findAll(query);
    }
}

export default SubjectRep