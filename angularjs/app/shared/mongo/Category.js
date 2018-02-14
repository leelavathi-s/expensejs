var Mongo = require('./Mongo.js');
var mongodb = require('mongodb');

exports.get =  () => {
    const promise = Mongo.connect();
    return promise.then(db => db.collection('category').find({}).toArray());
}

exports.update = category =>{
    const promise = Mongo.connect();
    category._id = mongodb.ObjectId(category._id);
    return promise.then(db => db.collection('category').replaceOne({_id:category._id},category));
}

exports.create = category =>{
    const promise = Mongo.connect();
    return promise.then(db => db.collection('category').insertOne(category));
}