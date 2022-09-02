import _ from "lodash/array";
import "./index_style.less";
import icon from "./222.jpg";
import printMe from "./print.js";

console.log(printMe);

function component() {
  var element = document.createElement("div");
  element.classList.add("hello");

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  var myIcon = new Image();
  // myIcon.src = "./222.jpg";
  myIcon.src = icon;
  element.appendChild(myIcon);

  element.onclick = printMe;

  return element;
}

document.body.appendChild(component());
