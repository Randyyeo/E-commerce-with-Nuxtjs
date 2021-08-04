const MongoClient = require('mongodb').MongoClient;

module.exports = MongoClient.connect("mongodb+srv://fatimahbinali:yeotwig1999@cluster0.zrnj9.mongodb.net/E-commerce?retryWrites=true&w=majority", function (err, client) {
    if (err) throw err

    var db = client.db('Users');
    return db;
})
