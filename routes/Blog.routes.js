const express = require("express");
const {BlogModel} = require("../model/Blog.model");
// const {auth} = require("../middleware/Auth.middleware")
const blogRouter = express.Router();

blogRouter.get("/blogs" , async (req,res)=>{
    const query = req.query;

    try {
        const blogs = await BlogModel.find(query);
        

        res.send(blogs);
        
    } catch (error) {
        res.send(error)
    }
})

blogRouter.post("/blogs" , async (req,res)=>{
    const payload = req.body;
    try {
        const blog = new BlogModel(payload);
        await blog.save();
        res.send("new blog added to the blogs!!")
        
    } catch (error) {
        res.send(error);
    }
})

blogRouter.patch("/blogs/:id" , async(req,res)=>{
    const payload = req.body;
    const ID = req.params.id;
    try {
        await BlogModel.findByIdAndUpdate({_id : ID} , payload);
        res.send("updated successfully!!")
        
    } catch (error) {
        res.send(error);
    }
})

blogRouter.delete("/blogs/:id" , async(req,res)=>{
    const ID = req.params.id;
    try {
        await BlogModel.findByIdAndDelete({_id : ID});
        res.send("deleted successfully!!")
        
    } catch (error) {
        res.send(error);
    }
})

module.exports ={
    blogRouter
}