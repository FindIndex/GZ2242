export default defineNuxtRouteMiddleware((to, from) => {
  console.log("路由跳转了", to, from);
});
