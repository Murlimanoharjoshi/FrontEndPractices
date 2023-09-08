// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>visibility and z-index</title>
      <style>
          .box{
              width: 170px;
              height: 170px;
              border: 2px solid black;
          }
          #box1{
              z-index: 35;
              background-color: aqua;
          }
          #box2{
              z-index: 34;
              /* display: none; 
              will hide the element but but will show its empty space */
              /* visibility: hidden;
              will hide the element and the space */
              background-color: rgb(180, 135, 50);
          }
          #box3{
              /* z_inde will work only for position:relative,absolute,fixed or sticky; */
              background-color: #00ff88;
          }
          #box4{
              background-color: #bf2333;
          }
          
          
      </style>
  </head>
  <body>
      <div class="box" id="box1"></div>
      <div class="box" id="box2"></div>
      <div class="box" id="box3"></div>
      <div class="box" id="box4"></div>
  
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});