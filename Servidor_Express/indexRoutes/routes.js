const express = require('express');
const router = express.Router();

router.get('/api/lee',(req,res)=>{
    eval('var obj='+req.query.q);
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("chat");
        query = obj;
        dbo.collection("chats").find(query).toArray(function(err, result) {
            if (err) throw err;
            res.send(result)
            db.close();
        });
     });
})

router.delete('/api/borra',(req,res)=>{
    var mongodb   = require('mongodb');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("chat");
        var query = {_id: new mongodb.ObjectID( req.query.q )};
        dbo.collection("chats").deleteOne(query, function(err, result) {
            if (err) throw err;
            res.send(result)
            db.close();
        });
     });
})

router.put('/api/modifica',(req,res)=>{
    eval('var obj='+req.query.q);
    var mongodb   = require('mongodb');
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("chat");
        eval('var obj1='+req.query.q);
        var myquery = {_id: new mongodb.ObjectID(obj.created.default)}
        var newvalues = { $set: {nick: obj.nick, msg: obj.msg } };
        dbo.collection("chats").updateOne(myquery, newvalues, function(err, res1) {      
             if (err) throw err;
             res.send(res1)
             db.close();
        });
     });
})
router.post('/api/inserta',(req,res)=>{
    eval('var obj='+req.query.q);
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
         if (err) throw err;
         var dbo = db.db("chat");
         query = obj;
         dbo.collection("chats").insertOne(query,function(err, result) {
             if (err) throw err;
             res.send(result)
             db.close();
         });
      });    
})


module.exports=router;