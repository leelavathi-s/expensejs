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
exports.get = function(expense)
{
    return  Mongo.connect()
        .then(function (client) {
            console.log("Connected successfully to server");
            return client.db("expenseTracker");
        }).then(function (db) {
            console.log("Connected successfully to server", db);
            var res = db.collection('expense').find({});
            return res.toArray();
        }).catch(function (error) {
            console.log(error);
        });
}