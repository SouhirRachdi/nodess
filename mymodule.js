const fs= require('fs');
const path = require('path');



module.exports =(dirName,extension,callback)=>{
    extension= `.${extension}`;
  fs.readdir(dirName,function(err, list) {
    if (err) {
       return  callback(err);
    }
    const data=list.filter(file=>{
        return path.extname(file)===extension;
    });
        return callback(null, data)  ;
    
     });
 
    }
