import postRep from "../repositories/PostRep.js"

class PostSvc {
    static async getAllCommentByPost(idPost) {
        return await postRep.getAllCommentByPost(idPost)
    }
}

export default PostSvc