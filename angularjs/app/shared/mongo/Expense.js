let Mongo = require('./Mongo.js');
let mongodb = require('mongodb');

exports.save = expense => {
    const promise = Mongo.connect();
    expense.amount = mongodb.Double(expense.amount);
    expense.date = new Date(expense.date);
    return promise.then(db => db.collection('expense').insertOne(expense));
}
exports.getExpensesByYear = year => {
    const promise = Mongo.connect();
    return promise.then(db => {
        var cursor = db.collection('expense').aggregate([
            { $project: { year: { "$year": "$date" }, category: "$category", date: "$date", amount: "$amount" } },
            { $match: { "category": { $exists: true }, "year": parseInt(year) } },
            { $group: { _id: { "id": "$category", year: { "$year": "$date" } }, "totalAmount": { $sum: "$amount" } } },
            { $group: { _id: null, row: { $push: { amount: "$totalAmount", category: "$_id", "years": "$year" } }, "total_amount": { $sum: "$totalAmount" } } },
            { $unwind: "$row" },
            { $project: { category: "$row.category", yearss: "$row.year", "percentage": { "$multiply": [{ "$divide": ["$row.amount", "$total_amount"] }, 100] } } }
        ]);
        return cursor.get();
    });
    //return promise.then(db => db.collection('expense').aggregate();
}

exports.getExpensesForPeriod = period => {
    const promise = Mongo.connect();
    return promise.then(db => {
       // var cursor =db.collection('expense').aggregate([
         //   {$match:{"category":{$exists:true}}},
           // {$group:{_id:{year:{"$year":"$date"},category:"$category"} , amount:{"$sum":"$amount"}}},
            //{$group:{_id:{year:"$_id.year"},category:{$push:{name:"$_id.category",amount:"$amount"}}}}
            //]);
         var cursor =  db.collection('expense').aggregate([
         {$match:{"category":{$exists:true}}},
         {$group:{_id:{category:"$category",year:{"$year":"$date"}},row: {$push:{amount: {"$sum":"$amount"}}}}},
         {$group:{_id:{category:"$_id.category"},rows:{"$push":{year:"$_id.year",amount:{$sum:"$row.amount"}}}}} 
         ]);   
        return cursor.get();
    });
    //return promise.then(db => db.collection('expense').aggregate();
}