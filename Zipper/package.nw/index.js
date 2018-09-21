var express=require('express');
var app=express();
app.get('/',function(req,res){

res.send('NW.js is fucking cool');
});

app.listen(8080,'127.0.0.1');
console.log('server running');