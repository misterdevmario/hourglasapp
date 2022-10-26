const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} =require('./Middlewares/errorHandler')
const router =require('./routes/routes.js')
const usersRouter = require('./routes/userRoutes')
const fileUpload = require('express-fileupload')
let colors =require('colors')
const connectDb = require('./Config/db')
const PORT = process.env.PORT || 8001


connectDb()

const app = express()
app.use(express.json())
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir: './upload'
}))
app.use(express.urlencoded({extended:false}))
app.use(router)
app.use(usersRouter)
app.use('*', (req, res)=>{
    res.send('Not Found')
})

app.use(errorHandler)




app.listen(PORT, ()=> console.log(colors.rainbow(`Server listening on port ${PORT}`)))