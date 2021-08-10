var fs = require("fs") // internal --node 
var _ = require("underscore")// external --node 
var calc = require("./calc") //userdefine 


var a =[1,2,33,4,55,6,66]

console.log(  _.max(a)) //--> external --npm 
console.log(fs); //module --> internal 
//external module 
calc.add(12,2) //userdefine module 


