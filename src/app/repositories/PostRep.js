import Post from "../models/Post.js"
import Comment from "../models/Comment.js"
import User from "../models/User.js"

class PostRep {
    static async getAllCommentByPost(idPost) {
        var query = {
            where : {
                idpost : idPost
            },
            include : {
                model: Comment,
                include : {
                    model: User
                }
            }
        }
        return await Post.findOne(query)
    }
}

export default PostRep