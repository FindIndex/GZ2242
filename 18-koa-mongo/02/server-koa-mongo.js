const Koa = require("koa");
// https://www.koajs.com.cn/
const app = new Koa();

const Router = require("@koa/router");
// https://github.com/koajs/router
const router = new Router();

const bodyParser = require("koa-bodyparser");

const { users } = require("./mongo.js");

const CryptoJS = require("crypto-js");

const jwt = require("jsonwebtoken");

app.use(bodyParser());

router.get("/", (ctx, next) => {
  ctx.body = "get 方式 /";
});

// 注册
router.post("/register", bodyParser(), async (ctx, next) => {
  //   默认nodejs不接受post方式的请求体 1G文件 阻止恶意上传占用大量宽带资源
  //   console.log("ctx", ctx.request.body);
  let responseMsg = {};
  let { username, password } = ctx.request.body;
  if (username && password) {
    //

    // console.log(
    //   "CryptoJS.MD5(String(password).toString()",
    //   CryptoJS.MD5(String(password)).toString()
    // );

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

// 登录
router.post("/login", async (ctx, next) => {
  console.log(ctx.request.body);
  let { name, pwd } = ctx.request.body;
  let responseMsg = {};

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

// 个人面板 必须登录
router.get("/profile", (ctx, next) => {
  let token = ctx.request.header.authorization?.replace("Bearer ", "");
  try {
    var decoded = jwt.verify(token, "shhhhh");
    console.log(decoded);
    // 根据用户id 查询用户详情 并发送给前端

    ctx.body = decoded;
  } catch (error) {
    ctx.body = { state: 401, msg: "error", text: "需要token或者token失效" };
  }
});

app.use(router.routes());

app.listen(8080);
