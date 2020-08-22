const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://amar:amarjeet@enterpriseproject.lao2q.mongodb.net/hospital?retryWrites=true&w=majority";

async function connect(){

  const client = new MongoClient(uri, { useNewUrlParser: true });
   
  
try{
  await client.connect();
   const db=client.db("hospital");
   console.log(`connected to database ${db.databaseName}`)
/*
   const collection=db.createCollection("blood_group");
   console.log(`collection created ${(await collection).collectionName}`)
   */
  const blood_group=db.collection("blood_group")


  //insert  documents into collection
/*
const insertCursor= await blood_group.insertMany([
  {
   bloodID:110, 
   name: 'o+', 
   quantity:10
  },
  {
    bloodID:111, 
    name: 'o-', 
    quantity:9
   },
   {
    bloodID:112, 
    name: 'A+', 
    quantity:8
   },
   {
    bloodID:113, 
    name: 'A-', 
    quantity:5
   },

   {
    bloodID:114, 
    name: 'B+', 
    quantity:11
   },
   {
    bloodID:115, 
    name: 'B-', 
    quantity:18
   },
   {
    bloodID:116, 
    name: 'AB-', 
    quantity:10
   },
   {
    bloodID:117, 
    name: 'AB-', 
    quantity:10
   }

  ])
  console.log(insertCursor.insertedCount)
  */

 //const searchCursor =await blood_group.find();
 const searchCursor =await blood_group.find({"quantity":10});
 const result=await searchCursor.toArray();
 result.forEach(r=>console.log(r));
 console.table(result)
 
 
 //updating the document
 /*
 const updateCursor=await blood_group.updateOne(
   {"name":"o-"},
   {"$set":{"quantity":15}}
 )
 console.log(updateCursor.modifiedCount);
 
 */
 
 //deleting the document
 /*
 const deleteCursor=await blood_group.deleteOne(
   {"name":"AB-"}
 )
 console.log(deleteCursor.deletedCount)
 */
 
}

catch(ex){
  console.error(`something bad happen ${ex}`)
}

finally{
  client.close();
}

}
connect();
