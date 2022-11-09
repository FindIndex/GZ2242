const jwt = require("jsonwebtoken");

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

module.exports = getToken;
