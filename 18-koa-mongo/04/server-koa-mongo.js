const Koa = require("koa");
// https://www.koajs.com.cn/
const app = new Koa();

// 允许跨域
const cors = require("@koa/cors");
app.use(cors());

const KoaStatic = require("koa-static");

app.keys = ["im a newer secret", "i like turtle"];

// 设置静态托管
app.use(
  KoaStatic("uploads", {
    maxage: 3600 * 1000,
    gzip: true,
    index: "default.html",
  })
);
app.use(
  KoaStatic("public", {
    maxage: 3600 * 1000,
    gzip: true,
    index: "default.html",
  })
);
app.use(
  KoaStatic("images", {
    maxage: 3600 * 1000,
    gzip: true,
    index: "default.html",
  })
);

const render = require("@koa/ejs");
const path = require("path");

render(app, {
  root: path.join(__dirname, "view"),
  layout: false,
  viewExt: "ejs",
  cache: false,
  debug: false,
});

// 引入路由 使用路由
const apiProfileRouter = require("./routers/api/profile");
app.use(apiProfileRouter.routes());

const apiArticleRouter = require("./routers/api/article");
app.use(apiArticleRouter.routes());

const apiLoginRouter = require("./routers/api/login");
app.use(apiLoginRouter.routes());

const apiRegisterRouter = require("./routers/api/register");
app.use(apiRegisterRouter.routes());

const apiCommentRouter = require("./routers/api/comment");
app.use(apiCommentRouter.routes());

const indexRouter = require("./routers/index");
app.use(indexRouter.routes());

const loginRouter = require("./routers/login");
app.use(loginRouter.routes());

const articleRouter = require("./routers/article");
app.use(articleRouter.routes());

app.listen(8080);
