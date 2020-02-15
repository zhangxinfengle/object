const express=require('express');


var server=express();
server.listen(8080);
var userRouter=express.Router();//定义路由
var newsRouter=express.Router();



server.use('/user',userRouter);//使用中间件，确定路由驶向
server.use('/news',newsRouter);

//使用路由
userRouter.get('/',function (req,res) {

    res.send('This is userRouter')
});
newsRouter.get('/',function (req,res) {
   res.send('This is newRouter')
});