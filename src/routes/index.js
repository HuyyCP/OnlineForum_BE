import userRoute from './UserRoute.js'
export default function route(app) {
    app.use('/user', userRoute)
}