const Router = require("@koa/router");
// https://github.com/koajs/router
const router = new Router();
const { ObjectId, articles, users } = require("../mongo.js");

const bodyParser = require("koa-bodyparser");

const getToken = require("../middleware/getToken");

// 列出所有文章
router.get("/article", async (ctx, next) => {
  // console.log(ctx.request.query);
  let { limit = 2, page = 1 } = ctx.request.query;

  const cursor = articles
    .find(
      {},
      { limit: Number(limit), skip: Number(limit) * (Number(page) - 1) }
    )
    .sort({ _id: -1 });

  // 没有包含作者
  // ctx.body = {
  //   pages: Math.ceil((await articles.count()) / Number(limit)),
  //   current: Number(page),
  //   list: await cursor.toArray(),
  // };

  let arr = [];
  for await (const doc of cursor) {
    // console.log(doc.author);
    let author_res = await users.findOne(
      { _id: ObjectId(doc.author) },
      { projection: { password: 0 } }
    );
    arr.push({ ...doc, author_res });
  }
  // console.log(arr);
  ctx.body = {
    pages: Math.ceil((await articles.count()) / Number(limit)),
    current: Number(page),
    list: arr,
  };
});

// 发布文章
router.post("/article", getToken, bodyParser(), async (ctx, next) => {
  let user = ctx.state.user;
  let { title, content } = ctx.request.body;
  let res = await articles.insertOne({
    title,
    content,
    author: user._id,
    createAt: Date.now(),
  });

  ctx.body = res;
});

// 某个文章详情
router.get("/article/:id", async (ctx, next) => {});

// 更新某个文章
router.put("/article/:id", async (ctx, next) => {});

// 删除某个文章
router.delete("/article/:id", getToken, async (ctx, next) => {
  let id = ctx.request.params.id;
  let user = ctx.state.user;

  // console.log(id, user);
  // 判断文章的作者 是不是当前登录用户
  let doc = await articles.findOne(
    { _id: ObjectId(id) },
    { projection: { author: 1 } }
  );
  if (doc.author === user._id) {
    // console.log("可以删除");

    ctx.body = {
      state: 200,
      msg: "success",
      text: "删除成功",
      res: await articles.deleteOne({ _id: ObjectId(id) }),
    };
  } else {
    // console.log("没有权限");
    ctx.body = {
      state: 401,
      msg: "error",
      text: "没有权限",
    };
  }
});

module.exports = router;
