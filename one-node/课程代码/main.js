const http=require('http');
const queryString=require('querystring');
const fs=require('fs');
const urlLib=require('url');

var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    if(req.url!='/favicon.ico'){
        var GET={};
        var str='';
        var obj=urlLib.parse(req.url,true); //get 请求
        // console.log(obj);
        var url=obj.pathname;
        req.on('data',function(data){
           // console.log(data);
            str+=data;
        });
        req.on('end',function(){

            var POST=queryString.parse(str);
            GET=obj.query;
            console.log(url,GET,POST);
        });
        var fileName='./www'+url;
        fs.readFile(fileName,function(err,data){
            if(err) console.log(err);

            else{
                res.write(data);
                res.end();
            }
        })
    }

    // res.end('服务器啊响应成功');
}).listen(8080);