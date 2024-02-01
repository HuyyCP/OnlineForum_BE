import SubSubject from "../models/SubSubject.js"
import Post from "../models/Post.js"

class SubSubjectRep {
    static async getAllPostBySubSubject(idSubSubject) {
        var query = {
            where: {
                idsubject : idSubSubject
            }, 
            include: {
                model: Post
            }
        }
        return await SubSubject.findOne(query)
    }
}

export default SubSubjectRep