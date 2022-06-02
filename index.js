import express from "express";
import bodyParser from "body-parser";
const application = express();

application.use(bodyParser.json());

application.post('/login', (loginRequest,loginResponce)=>{
    const userName = loginRequest.body.userName;
    const password = loginRequest.body.password;

    if(userName == "callme@byui.edu" && password  == "M@ckB00k"){
        loginResponce.status(200);
        loginResponce.send({status:"Welcome your nightmare begins"});
    } else {
        loginResponce.status(403);
        loginResponce.send({status:"Get YOTE YOLO LOL"})
    }
});


application.get('/',(req,res)=>{res.send("Hello")});
application.listen(3000,()=>{console.log('listening ...')});