const Koa = require("koa");
const app = new Koa();

// 设置cookie签名 密钥
app.keys = ["123", "456"];

// ctx上挂载任意属性或者方法
app.context.xxx = 123;

// x-response-time
app.use(async (ctx, next) => {
  // 识别用户 方便后续中间件 根据用户啊处理请求
  // ctx.state.user = { name: "nick", age: 17 };
  ctx.state.user = ctx.cookies.get("name", { signed: false });

  const start = Date.now();
  await next();
  // console.log("start", start, ctx.body, ctx.request, ctx.response);
  // ctx.request, ctx.response 是 koa的 request与response
  // console.log("start", start, ctx.body, ctx.req, ctx.res);
  // ctx.req, ctx.res是原生node的 request与 response 混用原生属性
  ctx.set({
    "x-response-time": Date.now() - start,
  });
});

// logger
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  console.log(`${ctx.method} ${ctx.url} - ${Date.now() - start}ms`);
});

// 响应
app.use(async (ctx) => {
  // console.log(ctx);
  // ctx上下文对象
  //   ctx.body = "hello world";
  //   ctx.body = "<h1>hello world</h1>";
  //   ctx.body = { name: "nick", age: 17 };
  //   自动识别需要发送的内容 并且设置对应的 mime

  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  ctx.cookies.set("name", "tobi", { signed: true });
  // ctx.body = { name: "nick", age: 17, ctxCustomeProp: ctx.xxx };
  ctx.body = { name: "nick", age: 17, ctxCustomeProp: ctx.xxx };
  // ctx.redirect("/login");

  console.log("ctx.state.user", ctx.state.user);
});

app.on("error", (err) => {
  console.log("server error", err);
});

app.listen(8080);
