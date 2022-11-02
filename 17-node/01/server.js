// 常见的http服务  80  nginx apache （Linux）  windows server iis（2003 2008 2012）  xp 7 8 10 11(消费)
// http80 https443 ftp20  ssh(linux的终端默认端口)

var http = require("http");
// 引入模块 http是node.js内置的模块
// npm安装的模块（下载别人写的代码）
// 我们自己写的文件

// console.log(http);
// console.log(typeof http);

var server = http.createServer(function (request, response) {
  // 每次有请求如何处理

  if (request.url !== "/favicon.ico") {
    console.log("request.url", request.url);

    //   content-type: text/html; charset=UTF-8
    response.writeHead(200, {
      // "content-type": "text/html; charset=UTF-8",
      "content-type": "text/plain; charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      // 设置cookie
    });

    //   response.end("<h1>hello world 你好世界</h1>");
    response.end(
      JSON.stringify({
        name: "nick",
        age: 17,
      })
    );
  }
});
// 创建服务器createServer(请求响应处理函数)

// console.log(server);

server.listen(8080);
// 开启端口监听

// 调试开发工具

/* 
解决终端打印的内容不方便看
chrome://inspect
node --inspect xx.js

解决每次修改代码都要重新启动服务
安装 supervisor  => npm install supervisor -g

supervisor --inspect xx.js
*/
