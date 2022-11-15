const Router = require("@koa/router");
const { appendFile } = require("fs");
// https://github.com/koajs/router
const router = new Router();

const getCookie = require("../middleware/getCookie");
const { ObjectId, articles, users } = require("../mongo.js");



router.get("/", getCookie, async (ctx, next) => {
  //   ctx.body = "<h3>hello</h3>";
  //   await ctx.render("index", { username: "nick" });
  let { limit = 5, page = 1 } = ctx.request.query;

  const cursor = articles
    .find(
      {},
      {
        // projection: { content: 0 },
        limit: Number(limit),
        skip: Number(limit) * (Number(page) - 1),
      }
    )
    .sort({ _id: -1 });

  let docs = [];
  for await (const doc of cursor) {
    // console.log(doc.author);
    let author_res = await users.findOne(
      { _id: ObjectId(doc.author) },
      { projection: { password: 0 } }
    );
    docs.push({ ...doc, author_res });
  }

  let user = ctx.state.user;
  // console.log(user);

  // await ctx.render("index", { docs, userId? userId : {} });
  await ctx.render("index", { docs, ...(user ? { user } : {}) });
});

/* 

<% '脚本' 标签，用于流程控制，无输出。
<%_ 删除其前面的空格符
<%= 输出数据到模板（输出是转义 HTML 标签）
<%- 输出非转义的数据到模板
<%# 注释标签，不执行、不输出内容
<%% 输出字符串 '<%'
%> 一般结束标签
-%> 删除紧随其后的换行符
_%> 将结束标签后面的空格符删除

*/

module.exports = router;
