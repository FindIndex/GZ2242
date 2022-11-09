const Koa = require("koa");
// https://www.koajs.com.cn/
const app = new Koa();

const KoaStatic = require("koa-static");

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

// 引入路由 使用路由
const profileRouter = require("./routers/profile");
app.use(profileRouter.routes());

const articleRouter = require("./routers/article");
app.use(articleRouter.routes());

const loginRouter = require("./routers/login");
app.use(loginRouter.routes());

const registerRouter = require("./routers/register");
app.use(registerRouter.routes());

const Router = require("@koa/router");
// https://github.com/koajs/router
const router = new Router();
router.get("/", (ctx, next) => {
  ctx.body = "get 方式 /";
});

app.use(router.routes());

app.listen(8080);
