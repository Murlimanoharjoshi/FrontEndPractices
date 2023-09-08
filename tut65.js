// synchoronous or blocking
// -line by line execution

// asynchronous or non blocking
// --line by line execution not guaranteed
// -call back will fire
const fs=require("fs");
fs.readFile("selector.html","utf-8",(err,data)=>{
  console.log(data);  
});
console.log("this is a message");

