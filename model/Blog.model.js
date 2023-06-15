const mongoose = require("mongoose")

const blogSchema = mongoose.Schema({
    title  : String,
    category  :String,
    date : String,
    content : String
    
})

const BlogModel = mongoose.model("blog" , blogSchema);

module.exports = {
    BlogModel
}