const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://amar:amarjeet@enterpriseproject.lao2q.mongodb.net/hospital?retryWrites=true&w=majority";

async function connect(){

  const client = new MongoClient(uri, { useNewUrlParser: true });
   
  
try{
  await client.connect();
   const db=client.db("hospital");
   console.log(`connected to database ${db.databaseName}`)
   
   //  creating collection 
/*
   const collection=db.createCollection("room");
   console.log(`collection created ${(await collection).collectionName}`)
   
*/
  
  const room=db.collection("room")

  


 //insert  documents into collection
 /*
 const insertCursor= await room.insertMany([

      {roomID:202, name: 'OPD', incharge:'Ryan'},
      {roomID:203, name: 'OT', incharge:'Jenny'},
      {roomID:204, name: 'X RAY ROOM', incharge:'Joshi'},   
      {roomID:205, name: 'GENERAL WARD', incharge:'Andrew'},
      {roomID:206, name: 'SPECIAL WARD ICU', incharge:'Dharmuil'},
      {roomID:207, name: 'CANCER WARD', incharge:'Chiku'},
      {roomID:208, name: 'CHILDREN WARD', incharge:'Bilal'}
    
])


console.log(insertCursor.insertedCount)


*/
//finding the document 
const searchCursor =await  room.find();

const result=await searchCursor.toArray();
result.forEach(r=>console.log(r));
console.table(result)

}


catch(ex){
  console.error(`something bad happen ${ex}`)
}

finally{
  client.close();
}

}
connect();