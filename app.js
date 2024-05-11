const path = require("path")
const cookiParser = require("cookie-parser")
require('dotenv').config()
const express = require("express")
const userRoute = require("./routes/user")
const blogRoute = require('./routes/blog')

const Blog = require("./models/user.model")

const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")

const { checkForAuthenticationCookies } = require("./middleware/authMiddleware")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookies('token'))
app.use(express.static(path.resolve('./public')))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));




app.get('/', async (req, res)=>{
    const allBlogs = await Blog.find({})
    res.render('home', {
        user : req.user,
        blogs : allBlogs
    })
})

app.use("/user", userRoute)
app.use('/blog', blogRoute)


mongoose.connect(process.env.MONOG_URL)
.then(()=>{
    console.log("Mongodb is connected")
    const port = process.env.PORT || 8000;
    app.listen(port, ()=>{
        console.log(`Server is connected to ${port}`)
    })
})
.catch(()=>{
    console.log("Connection error")
})