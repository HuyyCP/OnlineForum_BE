import dotenv from 'dotenv'
dotenv.config()

import app from './app.js'

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})