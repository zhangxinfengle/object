/*onst ejs=require('ejs');
const express=require('express');

var server=express();

server.listen(8080);

server.get('/',function(req,res){
    ejs.renderFile('./view/1.ejs',
        {name:"wenzhe",content:"<h1>哲哥最帅</h1>",a:5,b:12,json:{
                "arr":[
                    {"wenzhe":"123456"},
                    {"wenzhe":"1256"},
                    {"wee":"12356","user":"wee",arr:['aaa','bbb','ccc']},
                    {"wehe":"1256"}
                ]
            }},
        function(err,data){
            res.send(data)
        })
})
*/
const consolidate=require('consolidate');
const express=require('express');
const expressStatic=require('express-static');

var server=express();

server.listen(8080);
//确定文件输出格式
server.set('view engine','html');
//确定文件路径
server.set('views','./view');
//确定模板引擎
server.engine('html',consolidate.ejs);

server.get('/',function(req,res){
    res.render('1.ejs',{name:"wenzhe","a":12});
});