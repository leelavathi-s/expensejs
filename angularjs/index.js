var bodyParser = require("body-parser");
var express = require("express");

var Expense = require("./app/shared/mongo/Expense.js");
var Category = require("./app/shared/mongo/Category.js");


var app = express();
app.listen(3000, () => console.log("Listening to port 3000"));

app.use(express.static('./app'));
app.use(bodyParser.json());


app.get("/", (req, res) => res.sendFile('./app/index.html', { root: __dirname }));

app.get("/expense", (req, response) => {
    let year = req.query.year;
    let period = req.query.period;
    if (year) {
        Expense.getExpensesByYear(req.query.year).then((data) => {
            response.setHeader("Content-Type", "application/json");
            response.send(data);
            response.end();
        }).catch((error) => {
            console.log("error is::", error);
            response.sendStatus(500);
            response.send("Error processing request.");
            response.end();
        });
    }
    else{  
        Expense.getExpensesForPeriod(period).then((data) => {
            response.setHeader("Content-Type", "application/json");
            response.send(data);
            response.end();
        }).catch((error) => {
            console.log("error is::", error);
            response.sendStatus(500);
            response.send("Error processing request.");
            response.end();
        });
    }
});
app.post("/expense", (req, response) => {
    Expense.save(req.body).then((data) => {
        console.log("Saved expense in db successfully.");
        response.sendStatus(201);
    }).catch((error) => {
        response.sendStatus(500);
        response.send("Error processing request.");
        response.end();
    });
});
app.get("/category", (req, response) => {
    Category.get().then((data) => {
        response.setHeader("Content-Type", "application/json");
        response.send(data);
        response.end();
        console.log(data);
    }).catch((error) => {
        response.sendStatus(500);
        response.send("Error processing request.");
        response.end();
    });
});
app.put("/category/:categoryId", (req, response) => {
    Category.update(req.body).then(data => {
        response.setHeader("Content-Type", "application/json");
        response.send(data);
        response.end();
        console.log(data);
    }).catch((error) => {
        console.log(error);
        response.sendStatus(500);
        response.send("Error processing request.");
        response.end();
    });
});
app.post("/category", (req, response) => {
    Category.create(req.body).then(data => {
        response.setHeader("Content-Type", "application/json");
        response.status(201);
        response.send(data);
        response.end();
        console.log(data);
    }).catch((error) => {
        console.log(error);
        response.sendStatus(500);
        response.send("Error processing request.");
        response.end();
    });
});

app.delete("/category/:categoryId", (req, response) => {
    Category.remove(req.params.categoryId).then(data => {
        response.setHeader("Content-Type", "application/json");
        response.status(204);
        response.send(data);
        response.end();
        console.log(data);
    }).catch((error) => {
        console.log(error);
        response.sendStatus(500);
        response.send("Error processing request.");
        response.end();
    });
});