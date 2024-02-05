import postSvc from "../services/PostSvc.js"
import accountSvc from "../services/AccountSvc.js"

class PostController {
    static async getAllCommentByPost(req, res) {
        var token = req.headers.authorization
        var user = await accountSvc.checkToken(token)
        var responseCode = user != null ? 200 : 401    
        if(responseCode == 200) { 
            var idPost = req.query.id
            res.status(200).json(await postSvc.getAllCommentByPost(idPost))
        } else {
            res.status(401).json({message: "Error"})
        }
    }
}

export default PostController