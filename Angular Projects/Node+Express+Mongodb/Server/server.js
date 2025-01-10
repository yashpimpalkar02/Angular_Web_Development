const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";
const client = new MongoClient(URL);

async function GetConnection()
{
    let result = await client.connect();
    let db = result.db("Marvellous");
    return db.collection("Batches");
}

function main()
{
    let ret;

    ret = GetConnection();
    console.log("Database connection is sucesful");
}

main()