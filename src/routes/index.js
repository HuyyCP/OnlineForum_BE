import userRoute from './UserRoute.js'
import accountRoute from './AccountRoute.js'

export default function route(app) {
    app.use('/user', userRoute)
    app.use('/account', accountRoute)
}