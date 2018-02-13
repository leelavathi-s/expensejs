var Promise = require('bluebird');
var MongoClient = require('mongodb').MongoClient;
exports.connect = () => {

// Connection URL
var url = 'mongodb://localhost:27017';

// Database Name
var dbName = 'expenseTracker';

// Use connect method to connect to the server
return MongoClient.connect(url)
    .then( (client) => {
        console.log("Connected successfully to server");    
        return client.db("expenseTracker");
    });
}


