const express = require("express");
const hbs = require('hbs');
const path = require('path');
const fs = require('fs');

const app = express();
app.set('view engine','hbs');

app.use((req,res,next)=>{
    let now = new Date().toString();
    let log = `${now} : ${req.method} ${req.url}`;
    fs.appendFile('server.log',log+'\n',(err)=>{
        console.log('server natoonest log kone');
    });
    next(); 
});

app.use(express.static(path.join(__dirname,'public')));

hbs.registerPartials(path.join(__dirname,'views/partials'));
hbs.registerHelper('date',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('uppercase',(val)=>{
    return val.toUpperCase();
});
app.get('/',(req,res)=>{
    // res.send('hello world');
    res.render('home',{
        pageTitle : 'صفحه اصلی',
        title : 'fariba',
    });
});
app.get('/api/sayHello',(req,res)=>{
    res.send('hello dg');
});
const port = 3000;
app.listen(port,()=>{
    console.log('server is run');
});
