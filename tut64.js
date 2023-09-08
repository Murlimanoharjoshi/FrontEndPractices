const fs= require("fs");
let text=fs.readFileSync("display.html","utf-8");
text=text.replace("html","dhtml");
console.log("the content of file is");
console.log(text);
console.log("creating a new file...")
fs.writeFileSync("rohan.txt",text);
