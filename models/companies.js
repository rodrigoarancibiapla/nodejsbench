const MongoClient = require('mongodb').MongoClient;


var client;

async function getByEmployeesNumber(number) {

    const url = process.env.MONGOURI;
    const dbName = process.env.MONGODB;
    const collection = process.env.MONGOCOLLECTION;

    if (client === undefined) {
        var db = await MongoClient.connect(url);
        client = db;

    } else {
        db = client;
    }
    var dbo = db.db(dbName);
    var col = dbo.collection(collection);

    const result = await col.find({ numEmps: { $gt: parseInt(number) } }).toArray();
    return result;

}

module.exports = { getByEmployeesNumber }