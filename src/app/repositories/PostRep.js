import Post from "../models/Post.js"
import Comment from "../models/Comment.js"
import User from "../models/User.js"
import Role from "../models/Role.js"

class PostRep {
    static async getAllCommentByPost(idPost) {
        var query = {
            attributes: ['idpost', 'title', 'datecreate', 'content'],
            where : {
                idpost : idPost
            },
            include : [
                {
                    model: User,
                    attributes: ['iduser', 'name'], 
                    include : { 
                        model: Role,
                        attributes: ['rolename']
                    }
                },
                {
                    model: Comment,
                    attributes: ['idcomment', 'message', 'datecomment'],
                    include : {
                        model: User,
                        attributes: ['iduser', 'name'], 
                        include : {
                            model: Role,
                            attributes: ['rolename']
                        }
                    },
                },                
            ],
            order: [[Comment, 'datecomment', "DESC"]]
        }
        return await Post.findOne(query)
    }

    static async addPost(post) {
        try {
            await Post.create(post)
            return true
        } catch (err) {
            return false
        }
    }
}

export default PostRep