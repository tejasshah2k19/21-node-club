var express = require("express")
var mongoose = require("mongoose")
var apiRoutes = require("./api-routes")

const app = express()

//middle
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//db connection
mongoose.connect('mongodb://localhost:27017/meanclub', {useNewUrlParser: true, useUnifiedTopology: true});


//routes 
app.use("/api", apiRoutes); // api/saveuser



app.listen(3000, function () {
    console.log("server started....");
})