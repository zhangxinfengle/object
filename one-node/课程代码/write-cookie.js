
const express=require('express');
const expressStatic=require('express-static');
const cookieParse=require('cookie-parser');//解密cookie
const cookieSession=require('cookie-session');


var server=express();
server.listen(8080);
server.use(cookieParse('asfagag'));
server.use(cookieSession({
    name:'see',
    key:['aaa','fafa','ccc'],
    maxAge:100*1000910
    }));
server.get('/aaa',function (req,res) {
    req.session[user]='aaa';
    console.log( req.session[user])


    req.secret='asfagag';//签名
   res.cookie('user','aaa',{path:'/aaa',maxAge:1000*60*1000,signed:true});
   res.cookie('age','fqf',{path:'/aaa',maxAge:1000*60*1000});
    console.log('未加密的cookie',req.cookies)
    console.log('加密过的cookie',req.signedCookies)
         res.send('设置cookie');

});
server.use(expressStatic('./www'));