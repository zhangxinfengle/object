
  //不知道什么原因 每次修改，添加都会卡一下 不知道是不是电脑的问题
    var addContactBtn=$('#add-contact-button');
   var contactList=$('#contact-list');
   var addContactModel=$('#add-contact-modal');
   var addContactSubmit=$('#add-contact-submit');
   var addContactName=$('#add-contact-name');
   var addContactPhoneNumber=$('#add-contact-phoneNumber');
   var reviseModal=$('#revise-modal');
   var reviseSubmit=$('#revise-submit');
   var reviseName=$('#revise-name');
   var revisePhonenumber=$('#revise-phoneNumber');
   var revise_id = '' ;//保存当前要修改的id
   var searchIput=$('#search-input');
   var addEventListen=function () {
       var removeBtn=$('.remove-btn');
       var reviseBtn=$('.revise-btn');
       removeBtn.on('click',function () {
           //获取要删除的ID console.log($(this).attr('data-_id'))
           removeContact($(this).attr('data-_id'))
       });
       reviseBtn.on('click',function () {
           revise_id = $(this).attr('data-_id');
           $.ajax({
               type:"get",
               url:'/getContact',
               data:{_id: revise_id},
               success:function (e) {
                   var nowRevise=e[0];
                   if(nowRevise){
                       reviseName.val(nowRevise.name);
                       revisePhonenumber.val(nowRevise.phoneNumber)
                   }
               }
           });

           reviseModal.modal('show')
       });



   };


   var fillHtml=function (arr) {
    var html='';
    arr.forEach(element=>{

        html+=`<li class="list-group-item">
                <h3>${element.name}</h3>
                <p>${element.phoneNumber}</p>
                <div class="btn-group" role="group" aria-label="...">
                    <a type="button" href="tel:${element.phoneNumber}" class="btn btn-default">拨打号码</a>
                    <button type="button" class="btn btn-default revise-btn" data-_id="${element._id}">修改联系人信息</button>
                    <button type="button" class="btn btn-default remove-btn" data-_id="${element._id}" >删除联系人</button>
                </div>
            </li>`
    })

      contactList.html(html);
       addEventListen()
};
//删除联系人
   var removeContact=function (_id) {
       $.ajax({
           type:'get',
           url:'/remove',
           data:{_id:_id},
           success:function (e) {
               getAllContact()
           }


       })

   };
   //修改联系人
   var reviseContact=function (_id,name,phoneNumber) {
       $.ajax({
           type:'post',
           url:'/reviseContact',
           data:{_id:_id,name:name,phoneNumber:phoneNumber},
           success:function (e) {
               console.log('fafasssssssss');
               getAllContact()
           }

       })
   };
   //搜索

   var search = function(wd){
       $.ajax({
           type:'GET',
           url : '/search',
           data : {
               wd : wd
           },
           success : function(e){
               fillHtml(e)
           }
       })
   }


//获取全部联系人
var getAllContact=function () {
    $.ajax({
        type:'GET',
        url:'/getAllContact',
        data:{},
        success:function (result) {
          fillHtml(result)
        }

    })
};
//添加联系人
   var addContact=function (name,phoneNumber) {
       $.ajax({
           type:'post',
           url:'/addContact',
           data:{name:name,phoneNumber:phoneNumber},
           success:function (e) {
               getAllContact()
           }

       })
   };

 //添加一个事件监听器
 var listener=function () {

    addContactBtn.on('click',function () {
        addContactModel.modal('show')
    });
     addContactSubmit.on('click',function () {
         var name=addContactName.val();
         var phoneNumber=addContactPhoneNumber.val();
         addContact(name,phoneNumber);
         addContactModel.hide();
         addContactName.val('');
         addContactPhoneNumber.val('');
     });



     reviseSubmit.on('click',function () {

         var name=reviseName.val();
         var phoneNumber=revisePhonenumber.val();
         var _id = revise_id;
         revise_id = '';

         reviseContact(_id,name,phoneNumber);
         console.log('fafa');
         reviseModal.hide()

     });

     searchIput.on('input',function () {
         console.log($(this).val());
         search($(this).val())
     })
 };


var main=function () {
           getAllContact();
           listener()
};
main();
/*
*
* var express= require('express') // http框架
var bodyParser = require('body-parser') // 解析http请求体
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended:false})

var MongoControl = require('./databasecontrol').MongoControl
var contact = new MongoControl('classTest','contact')

var app = express()

app.use(express.static('./static'))

// API
// GET POST
// getAllContact -  获取全部联系人 =》 返回一个联系人数组 用户ajax请求后填充到页面中
// search        - 搜索联系人
// addContact    - 添加联系人
// removeContact - 删除联系人
// reviseContact = 修改联系人

var handle500 = function(res){
    res.status(500).send('数据库查询错误。')
}
//获取全部联系人
app.get('/getAllContact',function(req,res){
    contact.find({},function(err,result){
        if(err){
            handle500(res)
            return
        }
        res.send(result)
    })
})
//获取一个联系人
app.get('/getContact',function(req,res){
    var _id = req.query._id
    contact.findById(_id,function(err,result){
        if(err){
            handle500(res)
            return
        }
        res.send(result)
    })
})
//搜索
app.get('/search',function(req,res){
    var wd = req.query.wd
    var reg = new RegExp(wd,'i')
    contact.find(
        {
            $or : [
                {name : {$regex : reg}},
                {phoneNumber : {$regex : reg}}
            ]
        },function(err,result){
            if(err) return handle500(res)
            res.send(result)
        }
    )
})

app.get('/removeContact',function(req,res){
    var _id = req.query._id
    contact.removeById(_id,function(err,result){
        if(err) return handle500(res)
        res.send(result)
    })
})
//添加联系人
app.post('/addContact',urlencodedParser,function(req,res){
    var {name , phoneNumber} = req.body
    var docs = {
        name : name,
        phoneNumber : phoneNumber
    }
    contact.insert(docs,function(err,result){
        if(err) return handle500(res)
        res.send({result:'ok'})
    })
})
//修改联系人
app.post('/reviseContact',urlencodedParser,function(req,res){
    var {_id , name ,phoneNumber} = req.body

    contact.updateById(_id,{name : name ,phoneNumber : phoneNumber},function(err,result){
        if(err){
            return handle500(res)
        }
        res.send({'result':'ok'})
    })

})



app.listen(3000)
* */