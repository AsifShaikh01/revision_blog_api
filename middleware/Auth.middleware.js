const jwt = require("jsonwebtoken");

// const auth = (req,res,next) =>{
//     try {
//         let token = req.headers.authorization;
//         if(token){
//             token = token.split(" ")[1];
//             let user = jwt.verify(token , "revision");
//             req.userId = user.id;
//         }else{
//             res.send("unauthorized user!!")
//         }
//         next();
        
//     } catch (error) {
//         res.send("unauthorized user!!")
//     }
// }

// module.exports={
//     auth
// }