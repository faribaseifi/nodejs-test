// const {logger} = require("./logger");

// const fs = require('fs');
// const os = require('os');
// const path = require('path');
const Logger = require("./logger");
let logger = new Logger();
//shenavande ro besazim
logger.on('MessageLogger',(eventArgs)=>{
    console.log(eventArgs.message);
});
logger.log('Hello');
// emittt.emit('message',{message: 'Fariba seifi'});
// console.log(os.arch());
// console.log(os.platform());
// console.log(os.cpus());
// console.log(path.join(__dirname,'app.js'));
// fs.writeFile('file.txt','salaam sob bekheir',(err)=>{
//     if(err){
//         console.log(err);
//     }
// })

// fs.readFile('file.txt',(err,da)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(da.toString());
// })