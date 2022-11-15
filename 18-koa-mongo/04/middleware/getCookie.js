const getCookie = async (ctx, next) => {
  let user = ctx.cookies.get("user", {
    signed: true,
  });
  let parsedUser;
  try {
    parsedUser = JSON.parse(decodeURIComponent(user));
  } catch (error) {
    parsedUser = null;
  }

  ctx.state.user = parsedUser;
  await next();
};

module.exports = getCookie;
