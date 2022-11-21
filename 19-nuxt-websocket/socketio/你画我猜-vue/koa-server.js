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
let currentMaster;
let questions = ["兔", "牛", "马", "狗"];
let currentQuestion;

io.on("connection", (socket) => {
  onlineIds.push(socket.id);
  console.log(onlineIds);

  if (onlineIds.length >= 2) {
    currentMaster = onlineIds.at(-1);
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    // socket.to(currentMaster).emit("set-master", currentMaster, currentQuestion);
    io.emit("set-master", currentMaster, currentQuestion);
  }

  socket.on("disconnect", (reason) => {
    onlineIds = onlineIds.filter((o) => o != socket.id);
  });

  //
  socket.on("down", (x, y) => {
    socket.broadcast.emit("down", x, y);
  });

  socket.on("move", (x, y) => {
    socket.broadcast.emit("move", x, y);
  });

  socket.on("send-msg", (text) => {
    // console.log(text);
    socket.broadcast.emit("recive-msg", socket.id, text);
  });

  socket.on("set-master", (id) => {
    console.log("set-master", id);
    // socket.to(id).emit("set-master", id, current);

    // 验证权限
    if (socket.id === currentMaster) {
      currentMaster = id;
      currentQuestion = questions[Math.floor(Math.random() * questions.length)];
      io.emit("set-master", id, currentQuestion);
    }
  });

  socket.on("clearhuaban", (x, y, w, h) => {
    // console.log(text);
    socket.broadcast.emit("clearhuaban", x, y, w, h);
  });
});

httpServer.listen(8080);
