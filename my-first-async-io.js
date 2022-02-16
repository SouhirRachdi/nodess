const fs = require('fs');

 fs.readFile(process.argv[2],'utf8',function(err,string){
    if (err) {
        return console.error(err);
     }
     const str = string.split('\n').length-1;
     console.log(str)
 });