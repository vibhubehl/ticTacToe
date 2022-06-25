const mongoose = require("mongoose");
require("dotenv").config();

export async function initialise(){
    mongoose.connect('mongodb+srv://'+process.env.DB_USER+':'+process.env.DB_PASSWORD+'@sendit.l64oetg.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
    console.log("Connected successfully!");
    });
}



// async function main(){
//     const uri = "mongodb+srv://"+process.env.DB_USER+":"+ process.env.DB_PASSWORD+"@sendit.l64oetg.mongodb.net/?retryWrites=true&w=majority";
//     const client = new MongoClient(uri);
  
//     try {
//         // Connect to the MongoDB cluster
//         await client.connect();
//         console.log("Connected successfully");
//         //await  listDatabases(client);
  
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
//   }
  
//   main().catch(console.error);