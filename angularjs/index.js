var bodyParser = require("body-parser");
var express = require("express");

var Expense = require("./app/shared/mongo/Expense.js");

var app = express();
app.listen(3000,function(){console.log("Listening to port 3000");});

app.use(express.static('./app'));
app.use(bodyParser.json());


app.get("/",function(req,res){
    res.sendFile('./app/index.html', { root: __dirname });
});

app.post("/expense",function(req,response){
    Expense.save(req.body);
    response.setHeader('Content-Type', 'text/html');
    response.write("data");
    response.end();
});