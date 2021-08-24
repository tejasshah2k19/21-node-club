var User = require("../model/userModel")
exports.saveuser = function(req,res){
 
    //post -> body 

    let u = new User({
            firstName: req.body.firstName,
            email:req.body.email,
            password:req.body.password
    }) 
    
    u.save(function(err,data){
        if(err){
            res.json({
                status:-1,
                data:err,
                msg:"Something went wrong"
            })
        }else{
            res.json({
                status:200,
                data:data,
                msg:"user save successfully"
            })        
        }
    })


    
}


exports.authenticate = function(req,res){

}

