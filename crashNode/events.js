var http = require('http');
var fs = require('fs')

//create a server object:
http.createServer(function (req, res) {
    const data = `${Date.now()} data added\n `
    fs.appendFile('read.txt',data,(err,data)=>{
        res.end("hello from server");
    })
    console.log("server is runng")
  res.write('Hello World!'); //write a response to the client
   //end the response
}).listen(8080,()=>console.log("server is lsteining...........")); //the server object listens on port 8080



var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);

