const express = require("express")
const apiRoutes = require("./api-routes")


const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//routes
app.use("/api",apiRoutes)

//port
app.listen(3000,function(){
    console.log("server started....");
}) 

//db