var Mongo = require('./Mongo.js');

exports.get =  () => {
    const promise = Mongo.connect();
    return promise.then(db => db.collection('category').find({}).toArray());
}

exports.update = category =>{
    const promise = Mongo.connect();
    return promise.then(db => db.collection('category').replaceOne({ _id: category._id },
         {name:category.name,description:category.description}));
}

exports.create = category =>{
    const promise = Mongo.connect();
    return promise.then(db => db.collection('category').insertOne(category));
}