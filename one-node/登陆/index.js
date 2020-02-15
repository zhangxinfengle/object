const express=require('express');
const bodyParser=require('body-parser');
const MongoControl=require('./mongo-方法包装').MongoControl;
const usercontrol=new MongoControl('test','user');

//index.html 的       www 下的默认名字
var server=express();
server.listen(4000);


server.use(bodyParser.urlencoded({
    extended:true
}));



server.post('/register',function (req,res) {
    var {username,password}=req.body;
    if(username.length<6||password.length<6){
        res.status(403).send('账号密码过短');
        return
    }
    usercontrol.find({name:username},function (err,result) {
        if(err){
            res.status(500).send('服务器发生错误');
            return
        }
        if(result.length>0){
            res.status(200).send('该账户已存在')
        }else {
            usercontrol.insert({name:username,pass:password},function (err,result) {
                if(err){
                    res.status(500).send('服务器发生错误')
                    return
                }
                res.send('注册成功')
            })
        }

    });


});

server.post('/login',function (req,res) {
    var {username,password}=req.body;
    usercontrol.find({name:username,pass:password},function (err,result){
        if(err){
            res.status(500).send('服务器发生错误');
            return
        }
        if(result.length==0){
            res.status(403).send('账号密码错误')
        }else{
            res.send('登陆成功')
        }

    })


});
server.post('/changepass',function (req,res) {

    var {username,oldpass,newpass}=req.body;
    console.log(req.body);
    usercontrol.find({user:username,pass:oldpass},function (err,result) {
        if(err){
            res.status(500).send('不给你查找');
            return
        }
        if(res.length==0){
            res.status(403).send('你输入的账号密码不正确');

        }else{
            var _id=result[0]._id;
            usercontrol.updateById(_id,{pass:newpass},function (erro,result) {
                if(erro){
                    res.send("更改密码失败");
                    return
                }
                else{
                    res.send('密码更改成功')
                }

            })


                        }
            /*usercontrol.update({pass:oldpass},{pass:newpass},function (erro,result) {
                if(erro){
                    res.send("更改密码失败");
                    return
                }
                else{
                    res.send('密码更改成功')
                }

            })*/


    })

})



server.use(express.static('./www'));

