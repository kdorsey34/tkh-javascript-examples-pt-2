// const http = require("http");

// http
//   .createServer((request, response) => { 
//     response.writeHead(200, {"Content-Type": "text/html" })
//     response.write("<h1>Hello World</h1>");
//     response.end();

//   })
//   .listen(8080);
const http = require("http");

const server = http
  .createServer((request, response) => { 
    console.log(request.url); //pulls routing 
    if(request.url === "/"){
      response.writeHead(200, {"Content-Type": "text/html" })
      response.write("<h1>Hello World</h1>");
      response.end();
    }else if(request.url === "/home"){
      response.writeHead(200, {"Content-Type": "text/html" })
      response.write("<h1>Hello Home</h1>");
      response.end();
    } else{
      response.writeHead(404);
      response.end();
    }
   });
  server.listen(8080);

  export default server;

