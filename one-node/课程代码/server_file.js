const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const expressStactic=require('express-static');
const multer=require('multer');
const fs=require('fs');
//body 无法传文件

var server=express();
server.listen(8080);
var obj=multer({dest:'./www/upload'});
server.use(obj.any());
server.use(bodyParser.urlencoded({
    extenden:true
}));
/*     req.files 的如下
* [ { fieldname: 'f1',
    originalname: 'mid.css.map',
    encoding: '7bit',
    mimetype: 'application/octet-stream',
    destination: './www/upload',
    filename: 'fbd46fefbbfed36d70c9f9dd0f82421b',
    path: 'www\\upload\\fbd46fefbbfed36d70c9f9dd0f82421b',
    size: 3430 } ]
* */
server.post('/',function (req,res) {
   var originalname=req.files[0].originalname;
   var fileName=req.files[0].filename;
   console.log(fileName);
   var ext=path.parse(originalname).ext;
    console.log(originalname);
    console.log(ext);
    fs.rename('./www/upload/'+fileName,'./www/upload/'+fileName+ext,function(err){
        if(err)
            console.log(err);
        else{
            console.log('成功');
        }
    });

    res.send('数据提交成功')

});

server.use(expressStactic('./www'));

