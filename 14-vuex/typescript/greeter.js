// const greeter = (person) => "Hello, " + person;
// // let user = "Jane User";
// let user = { name: "nick", age: 17 };
// document.body.innerHTML = greeter(user);
var greeter = function (person) { return "Hello, " + person; };
// let user = "Jane User";
var user = { name: "nick", age: 17 };
document.body.innerHTML = greeter(user);
