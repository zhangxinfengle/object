const http=require('http');
const querString=require('querstring');

var server=http.createServer(function (req,res) {
    res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
    var str='';
    var times=1;
    req.on('data',function(data){
        //Es
        console.log(`===============${times++}拼接数据=============`);
        // console.log(data);
        str+=data;
    });
    req.on('end',function(){
        console.log(queryString.parse(str));
    });

    res.end('服务器啊响应成功');
}).listen(8080);