const Router = require("@koa/router");
// https://github.com/koajs/router
const router = new Router({
  prefix: '/api'
});
const { ObjectId, comments, users } = require("../../mongo.js");

const bodyParser = require("koa-bodyparser");

const getToken = require("../../middleware/getToken");

// 发布评论
router.post("/comment", getToken, bodyParser(), async (ctx, next) => {
  let user = ctx.state.user;
  let { articleId, content } = ctx.request.body;

  let res = await comments.insertOne({
    articleId,
    content,
    author: user._id,
    createAt: Date.now(),
  });

  ctx.body = res;
});

// 获取某个文章的评论列表
router.get("/comment/:articleId", async (ctx, next) => {
  let { articleId } = ctx.request.params;

  // console.log(ctx.request.params.articleId);
  let cursor = comments.find({ articleId }, { limit: 5, skip: 0 });

  let arr = [];
  for await (const doc of cursor) {
    // console.log(doc.author);
    let author_res = await users.findOne(
      { _id: ObjectId(doc.author) },
      { projection: { password: 0 } }
    );
    arr.push({ ...doc, author_res });
  }

  // ctx.body = await cursor.toArray();
  ctx.body = arr;
});

module.exports = router;
