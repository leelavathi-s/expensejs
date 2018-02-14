var Mongo = require('./Mongo.js');

exports.save = expense =>
{
    const promise = Mongo.connect();
    return promise.then(db => db.collection('expense').insertOne(expense));
}
exports.get = () =>
{
    const promise = Mongo.connect();
    return promise.then(db => db.collection('expense').find({}).toArray());
}