/*
const mysql=require('mysql');
//createConnection({主机名，用户名，密码，库名})
var db=mysql.createConnection({host:'localhost',user:'root',password:'123456',database:'20180326'});

// console.log(db);

db.query("INSERT INTO student_table(ID,name,age)VALUES(0,'benliang','2')",function(err,data){
    if(err)
        console.log(err);
    else{
        console.log(data);
    }*/
const express=require('express');
const expressStatic=require('express-static');
const bodyParser=require('body-parser');
const mysql=require('mysql');
const consolidate=require('consolidate');
const cookieParser=require('cookie-parser');
const ejs=require('ejs');
const common=require('./libs/common');

var db=mysql.createPool({host:'localhost',user:'root',password:'32167582',database:'0326-ku'});
var server=express();
server.listen(8081);

server.set('view engine','html');
server.set('views','./views');
server.engine('html',consolidate.ejs);

server.get('/',function (req,res,next) {
    db. query("SELECT * FROM banner_table ",function (err,data) {
        if (err){ console.log(err)}
        else {
            res.banners=data;
            next();
        }

    })
});
server.get('/',function (req,res,next) {
    db.query("SELECT ID,title,summary FROM  article_table " ,function (err,data) {
        if (err){ console.log(err)}
        else {
            res.news=data;
            next();
        }

    })
});
server.get('/',function (req,res) {
    res.render('index.ejs',{banners:res.banners,news:res.news})
});


server.get('/content',function (req,res) {
    if(req.query.id)
    {
        if(req.query.act){
            db.query(`UPDATE  article_table  SET n_like=n_like+1 ` ,function (err,data) {

                if(err)
                {
                    console.log(err)
                }
            })}

        db.query(`SELECT* FROM article_table WHERE ID=${req.query.id}`,function (err,data) {
            if (err){console.log(err)}
            else if(data.length==0){
                res.send('没有该文章')
            }
            else {
                console.log(data);
                var newdata=data[0];


                newdata.post_time=common.changeTime(newdata.post_time);
                newdata.content=common.changeContent(newdata.content);

                res.render('conText.ejs',{content:newdata});
            }


        })

    }
    else {
        res.send(数据错误)
    }


});


server.use(expressStatic('./www'));