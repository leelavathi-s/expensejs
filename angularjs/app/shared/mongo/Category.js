var Mongo = require('./Mongo.js');

exports.get = function()
{
    const promise = Mongo.connect();
    return  promise.then( (db) => db.collection('category').find({}).toArray());
}