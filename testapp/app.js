// require the mongoClient from mongodb module

var MongoClient = require('mongodb').MongoClient;

// mongodb configs
var connectionUrl = 'mongodb://localhost:27017/myproject',
    sampleCollection = 'chapters';

// need to insert these chapters into mongoDB
var chapters = [{
  'Title': 'Snow Crash',
  'Author': 'Neal Stephenson'
},{
  'Title': 'Crashy Rain',
  'Author': 'Richard McFace'
},{
  'Title': 'Blizzard Assault',
  'Author': 'Brian Wilson'
}];

MongoClient.connect(connectionUrl, function(err, db) {
  console.log("Connected correctly to server");

  // Get some collection
  var collection = db.collection(sampleCollection);

  collection.insert(chapters,function(error,result){
    // here result will contain an array of records inserted
    if(!error){
      console.log("Success :"+result.ops.length+" chapters inserted!");
    } else {
      console.log("Some error was encountered!");
    }
    db.close();
  });
});
