let Mongo = require('./Mongo.js');
let mongodb = require('mongodb');

exports.save = expense => {
    const promise = Mongo.connect();
    expense.amount = mongodb.Double(expense.amount);
    expense.date = mongodb.Timestamp(expense.date);
    return promise.then(db => db.collection('expense').insertOne(expense));
}
exports.get = groupBy => {
    const promise = Mongo.connect();

    return promise.then(db => {
        var cursor = db.collection('expense').aggregate([
            { $match: { "category": { $exists: true } } },
            { $group: { _id: "$category", "totalAmount": { $sum: "$amount" } } },
            { $group: { _id: null, row: { $push: { amount: "$totalAmount", category: "$_id" } }, "total_amount": { $sum: "$totalAmount" } } },
            { $unwind: "$row" },
            { $project: { category: "$row.category", "percentage": { "$multiply": [{ "$divide": ["$row.amount", "$total_amount"] }, 100] } } }
        ])
        return cursor.get();
    });
    //return promise.then(db => db.collection('expense').aggregate();
}