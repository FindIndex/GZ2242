const Koa = require("koa");
// https://www.koajs.com.cn/
const app = new Koa();

const KoaStatic = require("koa-static");
// https://github.com/koajs/static

const Router = require("@koa/router");
// https://github.com/koajs/router
const router = new Router();

// const fs = require("fs/promises");
// 静态文件响应
// app.use(async (ctx, next) => {
//   try {
//     let res = await fs.readFile("public/" + ctx.url);
//     // 还没有设置 mime 类型（png gif jpg jpeg webp mp4 webm js css mp3 ogg wav pdf html）
//     // Content-Type: text/plain; charset=utf-8
//     ctx.body = res.toString();
//   } catch (error) {
//     await next();
//   }
// });

// app.use(async (ctx) => {
//   ctx.body = { name: "nick", age: 19 };
// });

// 设置静态托管
app.use(
  KoaStatic("public", {
    maxage: 3600 * 1000,
    gzip: true,
    index: "default.html",
  })
);

// router.get("/", func)
// GET方式  /路径  响应函数
router
  .get("/", (ctx, next) => {
    ctx.body = "首页";
  })
  .get("/about", (ctx, next) => {
    ctx.body = "about 页面 GET";
  })
  .post("/about", (ctx, next) => {
    ctx.body = "about 页面 POST";
  })
  .get("/user/:id", (ctx, next) => {
    ctx.body = "user 页面 GET";
    console.log(ctx.params.id);
  });
// GET params传参 /user/123

router.get("/article", (ctx, next) => {
  console.log(ctx.query);
  ctx.body = "article 页面 GET";
});
// GET query 传参  /article?id=123

app.use(router.routes());

app.listen(8080);
