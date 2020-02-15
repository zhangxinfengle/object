const express=require('express');
const bodyParse=require('body-parser');
const expressStatic=require('express-static');
var server=express();
server.use(bodyParse.urlencoded({
    extened:true
}));
server.listen(8080);
server.get('/',function (req,res) {

    console.log(req.url)
    console.log(req.query)
});





server.use(expressStatic('./www'));