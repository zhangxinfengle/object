const http=require('http');
var server=http.createServer(function (req,res) {
   if(req.method.toLowerCase()=='get'){
       if(req.url=='/getInfo'){
           //游览器可以访问
           //ajax ?
           //NOt 'Access-Contral-Allow-Origin' header presented
           res.setHeader('Access-Control-Allow-Origin','*');
           res.writeHead(200,{'Content-Type':'text/json;charset=utf-8'});
           res.write(JSON.stringify({code:200}));
           res.end()
       }
   }

}).listen(8080);