const Koa = require("koa");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = new Koa();
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

let onlineIds = [];

io.on("connection", (socket) => {
  onlineIds.push(socket.id);
  console.log(onlineIds);
  if (onlineIds.length >= 2) {
    socket.to(onlineIds[0]).emit("changezhubo", true);
  }

  // setInterval(() => {
  //   socket.to(onlineIds[0]).emit("changezhubo", Date.now());
  // }, 1000);

  socket.on("disconnect", (reason) => {
    // console.log(reason);
    onlineIds = onlineIds.filter((o) => o != socket.id);
    // console.log(onlineIds);
  });

  socket.on("mousedown", ({ x, y }) => {
    // console.log("mousedown", x, y);
    socket.broadcast.emit("mousedown", { x, y });
  });
  socket.on("moving", ({ x, y, isDrawing: iszhuBoDrawing }) => {
    // console.log("moving", x, y);
    socket.broadcast.emit("moving", { x, y, iszhuBoDrawing });
  });
});

httpServer.listen(8080);
