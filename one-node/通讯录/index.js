var express= require('express') ;// http框架
var bodyParser = require('body-parser') ;// 解析http请求体
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended:false});

var MongoControl = require('./databasecontrol').MongoControl;
var contact = new MongoControl('classTest','contact');

var app = express();

app.use(express.static('./www'));

// API
// GET POST
// getAllContact -  获取全部联系人 =》 返回一个联系人数组 用户ajax请求后填充到页面中
// search        - 搜索联系人 
// addContact    - 添加联系人
// removeContact - 删除联系人
// reviseContact = 修改联系人

var handle500 = function(res){
    res.status(500).send('数据库查询错误。')
};
//获取全部联系人
app.get('/getAllContact',function(req,res){
    contact.find({},function(err,result){
        if(err){
            handle500(res);
            return
        }
        res.send(result)
    })
});
//获取一个联系人
app.get('/getContact',function(req,res){
    var _id = req.query._id;
    contact.findById(_id,function(err,result){
        if(err){
            handle500(res);
            return
        }
        res.send(result)
    })
});
//删除
app.get('/remove',function (req,res) {
    var _id = req.query._id;
    contact.removeById(_id,function (err,result) {
        if(err) return handle500(res);
        res.send(result)
    })
    
});

//搜索

app.get('/search',function (req,res) {
    var wd=req.query.wd;
    var reg=new RegExp(wd,'i');
    contact.find({
        $or:[
            {name:{$regex:reg}},
            {phoneNumber:{$regex : reg}}
        ]
    },function (err,result) {
        if(err) return handle500(res);
        res.send(result)
    })

});

//添加联系人
app.post('/addContact',urlencodedParser,function(req,res){
    var {name , phoneNumber} = req.body;

    var docs = {
        name : name,
        phoneNumber : phoneNumber
    };
    contact.insert(docs,function(err,result){
        if(err) return handle500(res);
        res.send({result:'ok'})
    })
});
//修改联系人
app.post('/reviseContact',urlencodedParser,function(req,res){
    var {_id ,name ,phoneNumber} = req.body;

    contact.updateById(_id,{name : name ,phoneNumber : phoneNumber},function(err,result){
        if(err){
            return handle500(res)
        }
        res.send({'result':'ok'})
    })

});



app.listen(3000);