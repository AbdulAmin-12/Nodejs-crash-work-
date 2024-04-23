const http = require('http')
const server = http.createServer((req,res)=>{
   // console.log(req.url)
   if(req.url==='/'){
    
res.end("hello from Home page")
   } else if(req.url==='/about'){
    
res.end("hello from the About Page")
   }  else if(req.url==='/contactus'){
    
res.end("hello from the Contact us Page")
   } else{

      res.writeHead(400)
      //res.end("page not exist")
   }

});
  server.listen(8000,()=>console.log("listeing..... come here"))

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.write('Hello World!');
//   res.end();
// }).listen(8004,()=>console.log("listeining to res"));