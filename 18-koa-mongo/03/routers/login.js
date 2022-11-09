const Router = require("@koa/router");
// https://github.com/koajs/router
const router = new Router();
const { users } = require("../mongo.js");

const CryptoJS = require("crypto-js");
const bodyParser = require("koa-bodyparser");

// 登录
router.post("/login", bodyParser(), async (ctx, next) => {
  console.log(ctx.request.body);
  let { name, pwd } = ctx.request.body;
  let responseMsg = {};

  const jwt = require("jsonwebtoken");

  let findUser = await users.findOne({ username: name });

  if (findUser) {
    responseMsg = { state: 401, msg: "error", text: "用户已存在" };

    if (findUser.password === CryptoJS.MD5(String(pwd)).toString()) {
      // 密码相等 登陆成功
      let { password, ...user } = findUser;

      responseMsg = {
        state: 200,
        msg: "success",
        text: "登陆成功",
        token: jwt.sign(user, "shhhhh"),
      };
    } else {
      // 密码错误
      responseMsg = { state: 401, msg: "error", text: "密码错误" };
    }
  } else {
    responseMsg = { state: 401, msg: "error", text: "用户账号不存在" };
  }

  ctx.body = responseMsg;
});

module.exports = router;
