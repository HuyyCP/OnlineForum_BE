import SubSubject from "../models/SubSubject.js"
import Post from "../models/Post.js"
import User from "../models/User.js"
import Role from "../models/Role.js"

class SubSubjectRep {
    static async getAllPostBySubSubject(idSubSubject) {
        var query = {
            attributes: ['idsubject', 'subjectname'],
            where: {
                idsubject : idSubSubject
            }, 
            include: {
                model: Post,
                attributes: ['idpost', 'title', 'datecreate', 'content'],
                include : {
                    model: User, 
                    attributes: ['iduser', 'name'],
                    include: {
                        model: Role,
                        attributes: ['rolename'],
                    }
                },
            },
            order: [[Post, 'datecreate', 'DESC']]
        }
        return await SubSubject.findOne(query)
    }
}

export default SubSubjectRep