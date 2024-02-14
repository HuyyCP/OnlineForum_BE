import postRep from "../repositories/PostRep.js"
import { v4 as uuid } from 'uuid'

class PostSvc {
    static async getAllCommentByPost(idPost) {
        return await postRep.getAllCommentByPost(idPost)
    }

    static async addPost(post) {
        post.idpost = uuid()
        post.datecreate = new Date().toISOString().slice(0, 19).replace('T', ' ')
        return await postRep.addPost(post)
    }
}

export default PostSvc