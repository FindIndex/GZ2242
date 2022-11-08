const Koa = require("koa");
// https://www.koajs.com.cn/
const app = new Koa();

const Router = require("@koa/router");
// https://github.com/koajs/router
const router = new Router();

const bodyParser = require("koa-bodyparser");

const { ObjectId, users } = require("./mongo.js");

const CryptoJS = require("crypto-js");

const jwt = require("jsonwebtoken");

const multer = require("koa-multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    // console.log(file);
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage: storage });

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

const getToken = async (ctx, next) => {
  let token = ctx.request.header.authorization?.replace("Bearer ", "");
  try {
    var decoded = jwt.verify(token, "shhhhh");
    ctx.state.user = decoded;
    await next();
  } catch (error) {
    ctx.body = { state: 401, msg: "error", text: "需要token或者token失效" };
  }
};

// 个人面板 必须登录
router.get("/profile", getToken, (ctx, next) => {
  let token = ctx.state.user;
  ctx.body = token;
});

// 个人面板 更新 必须登录
// router.put("/profile", getToken, async (ctx, next) => {
//   let user = ctx.state.user;
//   // console.log(user, ctx.request.body);
//   let { gender, qianming } = ctx.request.body;
//   let res = await users.updateOne(
//     { _id: ObjectId(user._id) },
//     { $set: { gender, qianming } }
//   );
//   // console.log(await users.findOne({ username: user.username }));
//   // console.log(await users.findOne({ _id: ObjectId(user._id) }));

//   ctx.body = { state: 200, msg: "success", text: "更新成功", res };
// });

// 携带文件头像
router.put("/profile", getToken, upload.single("avatar"), async (ctx, next) => {
  let user = ctx.state.user;
  console.log(user, ctx.req.body, ctx.req.file);
  // 默认没有开启二进制文件上传 multipart/form-data

  let { gender, qianming } = ctx.req.body;
  let res = await users.updateOne(
    { _id: ObjectId(user._id) },
    { $set: { gender, qianming, avatar: ctx.req.file.filename } }
  );

  ctx.body = { state: 200, msg: "success", text: "更新成功", res };
});

app.use(router.routes());

app.listen(8080);
