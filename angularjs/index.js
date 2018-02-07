var express = require("express");
var app = express();
app.listen(3000,function(){console.log("Listening to port 3000");});

app.use(express.static('public'));
app.use(express.static('./app'));


app.get("/",function(req,res){
    res.sendFile('./app/index.html', { root: __dirname });
});