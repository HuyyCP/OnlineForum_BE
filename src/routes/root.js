import userRoute from './UserRoute.js'
import accountRoute from './AccountRoute.js'
import subjectRoute from './SubjectRoute.js'
import subSubjectRoute from './SubSubjectRoute.js'
import postRoute from './PostRoute.js' 
import commentRoute from './CommentRoute.js'

export default function route(app) {
    app.use('/user', userRoute)
    app.use('/account', accountRoute)
    app.use('/subject', subjectRoute)
    app.use('/subsubject', subSubjectRoute)
    app.use('/post', postRoute)
    app.use('/comment', commentRoute)
}