import Comment from "../models/Comment.js"

class CommentRep {
    static async addComment(comment) {
        try {
            await Comment.create(comment)
            return true
        } catch (err) {
            return false
        }
    }

    static async deleteComment(idComment) {
        try {
            var query = {
                where: {
                    idcomment: idComment
                }
            }
            await Comment.destroy(query)
            return true
        } catch (err) {
            return false
        }
    }
}

export default CommentRep