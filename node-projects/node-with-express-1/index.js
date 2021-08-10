const express = require("express")

const app = express()

app.use(express.json()) //params : get delete 
app.use(express.urlencoded({extended:true})) //body  post put  


app.get("/",function(req,resp){
    resp.send("welcome")
    //params 
})

app.get("/home",function(req,resp){
    resp.send(["a","b","c","e"])
})

app.get("/signup",function(req,resp){

    // console.log(req);

    console.log(req.query);
    let firstName = req.query.firstName 
    resp.json({"firstName":firstName})
})

app.get("/users/:userId",function(req,res){
    console.log(req.params.userId);
    res.send(req.params.userId)
})

app.post("/signup",function(req,resp){
    console.log("signup with post called");
    console.log(req.params);
    console.log(req.body);
    let firstName = req.body.firstName 
    resp.json({"firstName":firstName})
    //body 
})

app.get("/user",function(req,resp){
    let user = {
        firstName:"ram",   
        lastName:"shyam"
    }
    resp.send(user)
})

app.get("/input",function(req,resp){

})


app.listen(3000,function(){ 
    console.log("Server Started : 3000 ");
})

//http://localhost:3000



