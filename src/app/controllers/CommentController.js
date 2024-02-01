import commentSvc from '../services/CommentSvc.js'
import accountSvc from '../services/AccountSvc.js'

class CommentController {
    static async addComment(req, res) {
        const token = req.headers.authorization
        var user = accountSvc.checkToken(token)
        if(user == null) {
            res.status(401).json({message: "Error"})
            return
        }
        const comment = req.body
        if(await commentSvc.addComment(comment)) {
            res.status(200).json({message: "Success"})
        } else {
            res.status(400).json({message: "Error"})
        }
    }

    static async deleteComment(req, res) {
        const token = req.headers.authorization
        var user = accountSvc.checkToken(token)
        if(user == null) {
            res.status(401).json({message: "Error"})
            return
        }
        const idComment = req.query.id
        if(await commentSvc.deleteComment(idComment)) {
            res.status(200).json({message: "Success"})
        } else {
            res.status(400).json({message: "Error"})
        }
    }
}

export default CommentController