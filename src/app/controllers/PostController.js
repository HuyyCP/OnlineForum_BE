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
    
    static async addPost(req, res) {
        const token = req.headers.authorization
        var user = await accountSvc.checkToken(token)
        if(user == null) {
            res.status(401).json({message: "Error"})
            return
        }
        const {title, content, idsubject} = req.body
        if(await postSvc.addPost({iduser: user.iduser, title, content, idsubject})) {
            res.status(200).json({message: "Success"})
        } else {
            res.status(400).json({message: "Error"})
        }
    }
}

export default PostController