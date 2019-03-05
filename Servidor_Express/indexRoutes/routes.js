const express = require('express');
const router = express.Router();
const Task = require('../models/database')

//  var newMsg = new Chat({
//      msg:'clase1',
//      nick: 'clse2'
//    });
//  newMsg.save();
router.get('/api/food',(req,res)=>{
    eval('var obj='+req.query.q);
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("chat");
        //var query = { nick: 'clse2' };
        query = obj;
        dbo.collection("chats").find(query).toArray(function(err, result) {
           // console.log(result)
            if (err) throw err;
            res.send(result)
            db.close();
        });
     });
})

router.get('/api/borra',(req,res)=>{
    //eval('var obj='+req.query.q);
    var mongodb   = require('mongodb');
    //console.log('paarmetrosServer Side1=' +req.query.q);

    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("chat");
        //var query = {_id: new mongodb.ObjectID( '5bc7b5e47113d116c4fda036' )};
        var query = {_id: new mongodb.ObjectID( req.query.q )};
        dbo.collection("chats").deleteOne(query, function(err, result) {
           // console.log(result)
            if (err) throw err;
            res.send(result)
            db.close();
        });
     });
})

router.get('/api/modifica',(req,res)=>{
    eval('var obj='+req.query.q);
    var mongodb   = require('mongodb');
    //console.log('paarmetrosServer Side1=' +obj.msg);
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("chat");

        var myquery = { nick: obj.nick };
        var newvalues = { $set: {nick: obj.nick, msg: obj.msg } };
        console.log(newvalues);
        dbo.collection("chats").updateOne(myquery, newvalues, function(err, res1) {      
            // console.log(result)
             if (err) throw err;
             res.send(res1)
             db.close();
        });
     });
})
router.get('/api/inserta',(req,res)=>{
    eval('var obj='+req.query.q);
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function(err, db) {
         if (err) throw err;
         var dbo = db.db("chat");
         query = obj;
         dbo.collection("chats").insertOne(query,function(err, result) {
            // console.log(result)
             if (err) throw err;
             res.send(result)
             db.close();
         });
      });    
})


module.exports=router;