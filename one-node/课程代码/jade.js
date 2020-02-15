/*
const jade=require('jade');
const express=require('express');

var server=express();
server.listen(8080);

server.get('/',function (req,res) {
    var str=jade.renderFile('./views/1.jade',{pretty:true,
        json:{"height":"100px","background-color":"green","width":"50%"},
        arr:['aaa','ccc','ddd','bbb'],
        nameA:"wenzhe666",
        nameB:"wangxi",
        content:"<h1>哲哥最帅</h1>"
    });
    console.log(str);
    res.send(str)
});*/
const jade=require('jade');
const fs=require('fs');
const express=require('express');

var server=express();
server.listen(8080);




server.get('/',function (req,res) {
    var str=jade.renderFile('./view/1.jade',{pretty:true,
        json:{"height":"100px","background-color":"green","width":"50%"},
        arr:['aaa','ccc','ddd','bbb'],
        nameA:"wenzhe666",
        nameB:"wangxi",
        content:"<h1>哲哥最帅</h1>"
    });
    console.log(str);
    res.send(str);


});