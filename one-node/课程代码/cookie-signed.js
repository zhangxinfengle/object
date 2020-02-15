const express=require('express');
const expressStatic=require('express-static');
const cookieParser=require('cookie-parser');
const cookieEn=require('cookie-encrypter');

var server=express();
server.listen(8080);

server.use(cookieParser('asdlkjlaskdj'));
server.use(cookieEn('asdlkjlaskdj'));

server.get('/user',function(req,res,next){
    req.secret='asdlkjlaskdj';
    const change={
        httpOnly:true,
        signed:true,
        maxAge:300*24*3600*1000
    }
    res.cookie('user','aaa',{path:'/user',maxAge:30*24*3600*1000});
    res.cookie('pass','123456',change);
    res.send();
    next();
})

server.get('/user',function(req,res){
    res.send();
    console.log(req.cookies,req.signedCookies);
})

server.use(expressStatic('./www'));