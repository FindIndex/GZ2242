const Router = require("@koa/router");
// https://github.com/koajs/router
const router = new Router({
  prefix: '/api'
});

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

const getToken = require("../../middleware/getToken");
const { ObjectId, users } = require("../../mongo");

// 个人面板 必须登录
router.get("/profile", getToken, async (ctx, next) => {
  let user = ctx.state.user;
  console.log(user);
  ctx.body = {
    state: 200,
    msg: "success",
    text: "更新成功",
    user: await users.findOne({ _id: ObjectId(user._id) }),
  };
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
router.put("/profile", getToken, upload.single("file"), async (ctx, next) => {
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

module.exports = router;
