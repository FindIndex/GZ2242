const Koa = require("koa");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = new Koa();
// app.use((ctx) => {
//   ctx.body = "hello";
// });
// 设置koa的路由
// const Router = require("@koa/router");
// // https://github.com/koajs/router
// const router = new Router();

// router.get("/", (ctx) => {
//   ctx.body = "hello world";
// });
// router.get("/about", (ctx) => {
//   ctx.body = "about page";
// });

// app.use(router.routes());

const KoaStatic = require("koa-static");

// 设置静态托管
app.use(
  KoaStatic("public", {
    maxage: 3600 * 1000,
    gzip: true,
    index: "index.html",
  })
);

const httpServer = createServer(app.callback());
const io = new Server(httpServer);

// socket 服务端 监听事件(用户建立新链接)
io.on("connection", (socket) => {
  // ...
  // console.log("有新用户建立了ws链接", socket.id);
  // 监听来自客户端的事件
  // socket.on("client2server", function (params) {
  //   console.log(params);
  // });

  // setInterval(() => {
  //   // 向某个链接用户发送消息
  //   socket.emit("xxx-yyy", socket.id);
  // }, 3000);

  // 广播 除发送者外的所有连接的客户端
  socket.broadcast.emit("newuser", "用户上线了");
});

// setInterval(() => {
//   // 广播 向所有链接的用户发送消息
//   io.emit("guangbo", Date.now());
// }, 3000);

httpServer.listen(8080);
