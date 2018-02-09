var Promise = require('bluebird');
var MongoClient = require('mongodb').MongoClient;
exports.connect = function(){

// Connection URL
var url = 'mongodb://localhost:27017';

// Database Name
var dbName = 'expenseTracker';

// Use connect method to connect to the server
return MongoClient.connect(url);
}


