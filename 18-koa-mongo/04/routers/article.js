const Router = require("@koa/router");
// https://github.com/koajs/router
const router = new Router({
  prefix: "/article",
});

const getCookie = require("../middleware/getCookie");
const { ObjectId, articles, users } = require("../mongo.js");

router.post("/delete/:id", getCookie, async (ctx, next) => {
  let { id } = ctx.request.params;
  console.log(id);
  let user = ctx.state.user;

//   console.log(user._id, id);
  let doc = await articles.findOne({ _id: ObjectId(id) });

  console.log(doc);
  if (user?._id === doc.author) {
    await articles.deleteOne({ _id: ObjectId(id) });
    console.log("删除成功");
    ctx.body = "shanchu";
  } else {
    ctx.body = "没有权限";
  }
});

module.exports = router;
