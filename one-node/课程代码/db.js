var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var ObjectId=mongodb.ObjectId;
var mongoUrl='mongodb://127.0.0.1:27017';

var MongoCotrol=function (dbName,tableName) {
    this.dbName=dbName;
    this.tableName=tableName;
    this.insert=function (data,callback) {
            MongoClient.connect(mongoUrl,{userNewUrlParser:true}, (err,res)=>{
            if(err){
                console.log(err);
                return;
            };
            var db=client.db(this.dbName);
                db.collection(this.tableName).insert(data,function (err,res) {
                    callback(err,res)
                    client.close()
                })
            })
    }

};