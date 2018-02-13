var Mongo = require('./Mongo.js');

exports.save = function(expense)
{
    const promise = Mongo.connect();
    return promise.then((db) => db.collection('expense').insertOne(expense));
}
exports.get = function()
{
    const promise = Mongo.connect();
    return  promise.then( (db) => db.collection('expense').find({}).toArray());
}