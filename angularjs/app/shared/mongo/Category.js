var Mongo = require('./Mongo.js');
var mongodb = require('mongodb');

exports.get =  () => {
    const promise = Mongo.connect();
    return promise.then(db => db.collection('category').find({}).sort({name:1}).toArray());
}

exports.update = category =>{
    const promise = Mongo.connect();
    category._id = mongodb.ObjectId(category._id);
    return promise.then(db => db.collection('category').replaceOne({_id:category._id},category));
}
exports.remove = categoryId =>{
    const promise = Mongo.connect();
    return promise.then(db => db.collection('category').deleteOne({_id:mongodb.ObjectId(categoryId)}));
}

exports.create = category =>{
    const promise = Mongo.connect();
    return promise.then(db => db.collection('category').insertOne(category));
}