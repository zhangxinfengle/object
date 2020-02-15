const mongodb=require('mongodb');
var MongoClient= mongodb.MongoClient;
var objectId=mongodb.ObjectId;
var mongoUrl='mongodb://127.0.0.1:27017';


    class MongoControl{
    constructor(dbName,CollectionName){
        this.dbName=dbName;
        this.CollectionName=CollectionName
    }
    _init(cb){
        MongoClient.connect(mongoUrl,{useNewUrlParser:true},(error,client)=>{
            if(error){
                cb(error);
                return
            }
            var db=client.db(this.dbName)
            cb(null,db.collection(this.CollectionName),client)

    })

    }
    //查找
    find(findQuery,callback){
        this._init((err,collection,client)=>{
            collection.find(findQuery).toArray((err,res)=>{
            callback(err,res)
            client.close()
    })

    })

    }
    findById(_id){
        var findQuery={_id:ObjectId(_id)};
        this.find(findQuery,callback)

    }
    //插入
    insert(dus,callback){
        this._init((err,collection,client)=>{
            collection.insert(dus,(err,res)=>{
            callback(err,res);
        client.close()
    })
    })
    }
    //删除
    remove(dus,callback){
        this._init((err,collection,client)=>{
            collection.remove(dus,(err,res)=>{
            callback(err,res)
            client.close()
    })
    })
    }
    removeById(_id,callback){
        var findQuery={_id:ObjectId(_id)};
        this.remove(findQuery,callback)
    }
    //更新
    update(dus,newDate,callback){
        this._init((err,collection,client)=>{
            collection.update(dus,{$set:newDate},(err,res)=>{
            callback(err,res)
            client.close()
    })
    })

    }

    updateById(_id,newDocs,callback){
        var findQuery={_id:ObjectId(_id)};
        this.update(findQuery,newDocs,callback)
    }


}
exports.MongoControl=MongoControl;




//var user=new MongoControl('test','user');
/*user.find({name:'zhouge'},function (err,res) {
   console.log(res)
});*/
/*user.insert({name:'xiaozhang',age:'55'},function (err,res) {
    console.log(res)
});*/
/*user.remove({name:'xiaozhang'},function (err,res) {
    console.log(res.result)
});*/
/*user.update({name:'李哥'},{age:888},function (err,res) {
    console.log(res.result)
});*/

