/**
 * Created by asus on 2018/3/20.
 */
const express=require('express');
const fs=require('fs');
const expressStatic=require('express-static');
const cookieParse=require('cookie-parser');
const bodyParser=require('body-parser');
var users={"zhouge":"88888"};

var server=express();
server.listen(8081);

server.use(cookieParse());
server.use(bodyParser({
    extended:true

}));


server.get('/',function (req,res) {

    if(req.cookies.user==null)
    {  fs.readFile('./www/cookie-post.html',function (err,data) {
        if(err) console.log(err);
        else {
            res.write(data);
            res.end();
            console.log('1')
        }

    })
    }
    else {
        res.send('欢迎')
    }

});
server.post('/sub',function (req,res) {
    if(req.body.act=='login')
    {

        if(users[req.body.user]==null){
            res.send({"ok":false,"mag":"没有改用户"})
        }
        else if(users[req.body.user]!=req.body.pass)
        {
            res.send({"ok":false,"mag":"密码错误"})
        }
        else {

            res.cookie('user',req.body.user,{path:'/',maxAge:30*1000*3600});
            res.cookie('pass',req.body.pass,{path:'/',maxAge:30*1000*3600});
            res.send({"ok":true,"mag":"登陆成功"});
            console.log("数据传输成功")

        }
    } else if(req.body.act=='reg')
    {
        if(users[req.body.user]){
            res.send({"ok":false,"mag":"该用户已被注册"})
        }
        else {
            users[req.body.user]=req.body.pass;
            res.send({"ok":true,"mag":"注册成功"})
        }

    }

});
server.use(expressStatic('./www'));






/*
const express=require('express');
const expressStatic=require('express-static');

var server=express();

server.listen(8080);

var users={
    "wenzhe":"123456",
    "fubo":"789456",
    "wangxi":"888888888"
}

server.get('/user',function(req,res){
    if(req.query.act=='login'){
        if(users[req.query.user]==null){
            res.send({"ok":false,"msg":"用户不存在"});
        }else if(users[req.query.user]!=req.query.pass){
            res.send({"ok":false,"msg":"密码错误"});
        }
        else{
            res.send({"ok":true,"msg":"登陆成功"});
        }
    }else if(req.query.act=='reg'){
        if(users[req.query.user]){
            res.send({"ok":false,"msg":"用户已存在"});
        }else{
            res.send({"ok":true,"msg":"注册成功"});
        }
    }

});

server.use(expressStatic('./www'));


*/


