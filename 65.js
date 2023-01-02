// Synchronous or blocking
// line by line execution

// Asynchronous or nonblocking
// line by line execution non geranted
// Call back will fire 
const fs = require("fs");
let text = fs.readFile("dele.txt","utf-8", (err,data)=>{
       console.log(data);
});
console.log("This is message");
