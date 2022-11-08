const { client, users } = require("./mongo");

(async function () {
  console.log("123");
  // await client.connect();
  let res = await users.updateOne(
    { username: "marry" },
    {
      $set: {
        gender: 0,
      },
    }
  );
  console.log("res", res);

  await client.close();
})();
