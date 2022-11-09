const { MongoClient, ObjectId } = require("mongodb");
// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&w=majority";
const uri = "mongodb://127.0.0.1:27017?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const db = client.db("learn_mongo");
const users = db.collection("users");

const articles = db.collection("articles");

// (async function () {
//   console.log("123");
//   // await client.connect();
//   let res = await users.findOne({ name: "nick" });
//   console.log("res", res);
// })();

// exports.users = users
module.exports = { client, ObjectId, users, articles };
