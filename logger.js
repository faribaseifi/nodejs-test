// function logger(m){
//     console.log(m);
// }
const EventEmitter = require('events');
class Logger extends EventEmitter{
    log(message){
        this.emit('MessageLogger',{message: 'fariba seifieee'});
    }
}

// let sum = (x)=>{
//     return x+=x;
// }
module.exports =Logger;