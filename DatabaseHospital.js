
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://amar:amarjeet@enterpriseproject.lao2q.mongodb.net/hospital?retryWrites=true&w=majority";

async function connect(){

  const client = new MongoClient(uri, { useNewUrlParser: true });
   
  
try{
  await client.connect();
   const db=client.db("hospital");
   console.log(`connected to database ${db.databaseName}`)
   /*
   //  creating collection 

   const collection=db.createCollection("doctor");
   console.log(`collection created ${(await collection).collectionName}`)
   */

  
  const doctor=db.collection("doctor")

   /*
   //inserting one document in collection

  const insertCursor= await doctor.insertOne(

    {doctorID:115, name: 'Gifty', 
    address: '771 coxwell ave',
    gender:'female',
    phoneno:'437-786-6262',
    specialization:"Nephrologist",
    year_of_experience:2,
    degree:["MBBS","M.D"," DM Nephrology"]
} )
console.log(insertCursor.insertedCount)
*/

/*
 //insert  documents into collection
 const insertCursor= await doctor.insertMany([
        {
         doctorID:110, 
         name: 'Unni', 
         address: '255 morningside ave',
         gender:'male',
         phoneno:'437--546-1083',
         specialization:"Psychiatrist",
         year_of_experience:7,
        degree:["Doctor of Medicine M.D","MBBS"]
        },
        {
          doctorID:111,
           name: 'Anthony', 
           address: '6 carslake cr',
           gender:'male',
           phoneno:'647-239-0012',
           specialization:"Infectious Disease Physician",
           year_of_experience:3,
           degree:["MBBS","PHd","M.D","EdD"]
          },
        {
          doctorID:112, 
          name: 'Margo', 
          address: '18 sancrest dr',
          gender:'female',
          phoneno:'641-001-8989',
          specialization:"Gynecologist",
          year_of_experience:5,
          degree:["M.D","PHd","MBBS","Doctor of Osteopathic Medicine"]
        },
        {doctorID:113, 
          name: 'Alex', 
          address: '54 baybrrok cr',
          gender:'male',
          phoneno:'416-390-8556',
          specialization:"Cardiologist",
          year_of_experience:10,
          degree:["MBBS", "MD ", "DM in cardiology"]
        },
        {
          doctorID:114, 
          name: 'Aron', 
          address: '867 yorkmill road',
          gender:'male',
          phoneno:'437-234-0091',
          specialization:"Surgeon",
          year_of_experience:2,
          degree:["Bachelor of Surgery","M.D","MBBS"]
        }
])


console.log(insertCursor.insertedCount)
*/

//finding the document 
//const searchCursor =await doctor.find();
//const searchCursor =await doctor.find({"name":"Unni"});
const searchCursor =await doctor.find({}, { projection: { _id: 0, name: 1, address: 2,gender:3 ,specialization:4} });
const result=await searchCursor.toArray();
result.forEach(r=>console.log(r));
console.table(result)


//updating the document
/*
const updateCursor=await doctor.updateOne(
  {"name":"Margo"},
  {"$set":{"phoneno":"641-456-8989"}}
)
console.log(updateCursor.modifiedCount);
*/


//deleting the document
/*
const deleteCursor=await doctor.deleteOne(
  {"specialization":"Nephrologist"}
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
 

