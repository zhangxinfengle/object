const urlLib=require('url');
const queryString=require('querystring');
const module1=require('./module')

var str='http://localhost:8080/index?a=12&b=5&c=13';

var obj=urlLib.parse(str,false);
console.log(obj)
console.log(obj.query);

console.log(module1.name+module1.age)
console.log(queryString.parse(obj.query));

