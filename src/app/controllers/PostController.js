import postSvc from "../services/PostSvc.js"

class PostController {
    static async getAllCommentByPost(req, res) {
        var idPost = req.query.id
        res.json(await postSvc.getAllCommentByPost(idPost))
    }
}

export default PostController