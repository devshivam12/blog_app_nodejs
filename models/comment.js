const mongoose = require("mongoose")

const commentSchmea = mongoose.Schema(
    {
        content : {
            type : String,
            require : true
        },
        blogId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "blog"
        },
        createdBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "user"
        }
    },
    {
        timestamps : true
    }
)

const Comment = mongoose.model('comment', commentSchmea);
module.exports = Comment