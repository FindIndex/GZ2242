const { client, users } = require("./mongo");

// (async function () {
//   // await client.connect();
//   let cursor = users.find({});
//   // console.log("cursor", await cursor.count());

// 不进行实际查询 只统计数量 cursor.count()

//   console.log("多条", await cursor.toArray());
//   await client.close();
// })();

(async function () {
  let query = {};

  // 查找值等于
  // let query = { name: "nick" };
  // 正则

  // let query = { age: { $gt: 18 } };
  // gt lt gte lte ne eq

  // 排序
  let options = {
    // sort: { age: 1 },
    // projection: { name: 1 },
    // projection: { pwd: 0 },
    limit: 2,
    skip: 2,
  };

  /* 
  补充一下 projection 参数的使用方法

  db.collection.find(query, projection)
  若不指定 projection，则默认返回所有键，指定 projection 格式如下，有两种模式

  db.collection.find(query, {title: 1, by: 1}) // inclusion模式 指定返回的键，不返回其他键
  db.collection.find(query, {title: 0, by: 0}) // exclusion模式 指定不返回的键,返回其他键
  _id 键默认返回，需要主动指定 _id:0 才会隐藏

  两种模式不可混用（因为这样的话无法推断其他键是否应返回）

  db.collection.find(query, {title: 1, by: 0}) // 错误
  只能全1或全0，除了在inclusion模式时可以指定_id为0

  db.collection.find(query, {_id:0, title: 1, by: 1}) // 正确
  */

  let cursor = users.find(query, options);

  // 排序
  // let cursor = users.find(query, options).sort({ age: -1 });
  // 1 升序 -1 降序

  // 排除
  // let cursor = users.find(query, options).project({ name: 1 });

  // console.log("cursor", await cursor.count());

  // await cursor.forEach((doc) => {
  //   console.log("====", doc);
  // });

  for await (const doc of cursor) {
    console.log("====", doc);
  }

  console.log(await users.count());

  await client.close();
})();
