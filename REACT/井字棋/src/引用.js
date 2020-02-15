//一般是数组和json是指向；
var a=[[1,2,3]];
var b=a[0];//b指向a的第0项
b[0]=5;//相当于修改a[0]的第0项为5
console.log('a-->',a);//[[5,2,3]]

console.log('b-->',b);//[5,2,3]
var arr=[];
b.map(i=>{
    arr.push(i);
})
console.log('arr-->',arr)
arr[0]=11111;
console.log('arr-->',arr)



//这是将1复制到y上（新开一个存储单元,与原来的x没关系)
var x=1;
var y=x;
y=333;
console.log(x);