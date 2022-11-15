const Router = require("@koa/router");
// https://github.com/koajs/router
const router = new Router({
  prefix: '/api'
});
const { users } = require("../../mongo.js");

const CryptoJS = require("crypto-js");
const bodyParser = require("koa-bodyparser");

// 注册
router.post("/register", bodyParser(), async (ctx, next) => {
  //   默认nodejs不接受post方式的请求体 1G文件 阻止恶意上传占用大量宽带资源
  //   console.log("ctx", ctx.request.body);
  let responseMsg = {};
  let { username, password } = ctx.request.body;
  if (username && password) {
    // 需要判断用户名
    let findUser = await users.findOne(
      { username },
      {
        projection: { password: 0 },
      }
    );
    console.log("findUser", findUser);
    if (findUser) {
      responseMsg = { state: 401, msg: "error", text: "用户已存在" };
    } else {
      // console.log(username, password);
      let res = await users.insertOne({
        username,
        // password: CryptoJS.MD5(String(password) + "xyz").toString(),
        password: CryptoJS.MD5(String(password)).toString(),
        // 密码 存储 一般使用md5 加减盐（防内鬼）
      });
      responseMsg = { state: 200, msg: "success", text: "注册成功", res };
    }

    ctx.body = {
      ...responseMsg,
    };
  }
});

module.exports = router;
