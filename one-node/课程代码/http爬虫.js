const  http=require('http');
const fs=require('fs');

//http://fm.shiyunjj.com/small/2017/927_like.jpg
//       '/small/2018/1400.jpg'

var imageName=1400;



var  request_web=function (path,i) {
    var request=http.request({
        protocol:'http:',
        host:'fm.shiyunjj.com', //域名
        port:80,                  //端口号
        method:'get',
        path:path,                 //路径
        headers:{
            'Referer':'http://m.mmjpg.com/',
            'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
        }                            //请求头


    });
    request.end();
    request.on('response',function (res) {
        console.log('响应被收到');
        console.log(res.headers);
        var arr=[];

        res.on('data',function (chunk) {
            arr.push(chunk);

        });
        res.on('end',function () {
            fs.writeFile('./www/Images/'+i+'.jpg',Buffer .concat(arr),function (err) {
                console.log('写入完成')
            });

            console.log('服务器响应已完成')
        })

    });

};
/*var path='/small/2018/1401.jpg';


request_web(path,2);*/
for(var i=0;i<1000;i++){
    imageName++;
    var realName=imageName+'.jpg';
    var path='/small/2018/'+realName;

    request_web(path,i)
}

