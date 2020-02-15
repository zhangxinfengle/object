/*
var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var ObjectId=mongodb.ObjectId;
const mongoUrl='mongodb://127.0.0.1:27017';
MongoClient.connect(mongoUrl,{useNewUrlParser:true},function (err,client) {
    if(err){
        console.log(err)
    }
    var db=client.db('test');
    //查
     /!* db.collection('user').find({}).toArray(function (error,res) {
          console.log(res);
          client.close();
      });*!/
    //增加
    /!*db.collection('user').insert({name:'xiaozhou',age:55},function (err,res) {
        console.log(res);
        client.close()
    });*!/
  //删除
   /!* db.collection('user').remove({
        _id:ObjectId('5bf51f5a9a40b7293404c1e3')
    },function (err,res) {
        console.log(res.result);
        client.close()
    })*!/
    //更新
   db.collection('user').update({name:'zhouge'},{$set:{age:60}},function (err,res) {
        console.log(res.result)
    })
});
*/
const MongoControl=require('./mongo-方法包装').MongoControl;

var user=new MongoControl('test','user');
user.find({name:'aa'},function (err,res) {
   console.log(res)
});


