var Mongo = require('./Mongo.js');

exports.save = function(expense)
{
    const promise = Mongo.connect();
    promise.then(function(client) {
        console.log("Connected successfully to server");
      
        var db = client.db("expenseTracker");
        db.collection('expense').insertOne(expense, function(err, r) {
        });
      })
      .catch(function(error){
         console.log(error);
      });
}