const express = require("express");
const dotenv = require("dotenv")
dotenv.config();
const {blogRouter} = require("./routes/Blog.routes");
const {userRouter} = require("./routes/User.routes")
const {connection} = require("./config/db");
const cors = require("cors");


const app = express();

app.use(express.json())
app.use(cors());

app.use("/api" , blogRouter);
app.use("/api" , userRouter);

app.listen(process.env.PORT , async()=>{
    
    try {
        await connection;
        console.log("connected to the database!!")
        
    } catch (error) {
        console.log("can't connect to the database!!")
    }
    console.log(`server is running at port ${process.env.PORT}`)
})
