const express=require('express')
const consolidate=require('consolidate');
var server=express();
server.listen(8080);

server.set('view engine','html'); //确定模板输出格式
server.set('views','./view');    //确定文件路径
server.engine('html',consolidate.ejs);//确定模板引擎
server.get('/',function (req,res) {
    res.render('1.ejs',{name:'aaa',age:'12'})

});