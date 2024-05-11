const mongoose = require("mongoose")

const blogSchema = mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        body : {
            type : String,
            required : true
        },
        coverImage : {
            type : String,
            required : false
        },
        createdBy : {
            type : mongoose.Types.ObjectId,
            ref : 'user'
        }

    },
    {
        timestemps : true
    }
)

const Blog = mongoose.model('blog', blogSchema)

module.exports = Blog