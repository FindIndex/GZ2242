function f(n) {
  if (n <= 2) {
    return 1;
  }
  return f(n - 1) + f(n - 2);
}

onmessage = function (event) {
  // console.log(event.data);
  postMessage(f(event.data));
};
// postMessage(f(42));
// setInterval(function () {
//   postMessage(Date.now());
// }, 1000);
