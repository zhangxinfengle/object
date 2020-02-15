const fs=require('fs');
const path=require('path');
var readdir=function (dir) {
  fs.readdir(dir,function (err,files) {
      files.forEach(e=>{
          var newdir=path.join(dir,e)
          var stats=fs.statSync(newdir)
      if(stats.isDirectory()){
          readdir(newdir)
      }else {
          console.log(newdir)
      }

      })
  })  
};
readdir('./A-work');

