const Router = require("@koa/router");
// https://github.com/koajs/router
const router = new Router();

const { ObjectId, users } = require("../mongo.js");

const CryptoJS = require("crypto-js");
const bodyParser = require("koa-bodyparser");

router.post("/login", bodyParser(), async (ctx, next) => {
  // console.log(123);
  let { name, pwd } = ctx.request.body;

  let findUser = await users.findOne({ username: name });

  if (findUser) {
    if (findUser.password === CryptoJS.MD5(String(pwd)).toString()) {
      // 密码相等 登陆成功
      // console.log("登陆成功");

      let { password, ...user } = findUser;

      ctx.cookies.set("user", encodeURIComponent(JSON.stringify(user)), {
        signed: true,
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: false,
      });

      // header 里面不能出现中文
      // ctx.cookies.set("user", JSON.stringify({ name: "nick尼古拉斯", age: 17 }), {
      //   signed: true,
      //   expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      // });

      ctx.redirect("/");
    } else {
      // 密码错误
      //   console.log("密码错误");
      ctx.body = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
          </head>
          <body>
            <h3>登录失败</h3>
        
            <script>
              setTimeout(() => {
                window.location.replace("/login.html");
              }, 3000);
            </script>
          </body>
        </html>
        `;
      //   ctx.redirect("/loginError.html");
    }
  } else {
    console.log("用户账号不存在");
  }
});

module.exports = router;
