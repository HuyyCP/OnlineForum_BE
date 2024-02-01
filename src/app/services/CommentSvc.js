import commentRep from "../repositories/CommentRep.js"
import { v4 as uuid } from 'uuid'

class CommentSvc {
    static async addComment(comment) {
        comment.idcomment = uuid()
        comment.datecomment = new Date().toISOString().slice(0, 19).replace('T', ' ')
        return await commentRep.addComment(comment)
    }

    static async deleteComment(idComment) {
        return await commentRep.deleteComment(idComment)
    }
}

export default CommentSvc