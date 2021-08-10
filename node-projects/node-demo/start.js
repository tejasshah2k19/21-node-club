const http = require("http")

const server = http.createServer(function(req,res){
    console.log("request coming......");
    console.log(req.url);
    
    if(req.url === "/"){
        console.log("in  / ");
       
        res.write("Welcome...");
        res.end();
        
        
    }else if(req.url == "/home"){
        res.write("home")
        res.end()
    
    }
});

server.listen(3000);

console.log("server started and listing your request on 3000");
//urls 
//localhost:3000 => 
