const mymodule = require('./mymodule.js')

const directory= process.argv[2];
const extension=process.argv[3];
mymodule(directory,extension,function(err, dataList){
    if (err) {
        return console.error(err);
     }
     dataList.forEach( function (file) {
               console.log( file );
       
      });
})