// function greeter(person: object) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
// let user = "nick";
// let user = { name: "nick", age: 17 };
document.body.innerHTML = greeter(user);
// let list: number[] = [1, 2, 3, "a"];
var list = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3, true];
var list2 = [1, 2, 3];
// 元组
// let x: [string, number] = [];
// let x: [string, number] = [5, 10];
var x = ["5", 10];
var notSure = 4;
var notSure2 = "4";
var notSure3 = [1, 2];
function xxx() {
    console.log(123);
    //   return "10";
    //   return Math.random().toString();
    //   return 10;
}
// let a: number = xxx();
var n = null;
