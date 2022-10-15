// function greeter(person: object) {
//   return "Hello, " + person.firstName + " " + person.lastName;
// }

// 接口
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
// let user = "nick";
// let user = { name: "nick", age: 17 };

document.body.innerHTML = greeter(user);

// let list: number[] = [1, 2, 3, "a"];
let list: number[] = [1, 2, 3];
// let list2: Array<number> = [1, 2, 3, true];
let list2: Array<number> = [1, 2, 3];

// 元组
// let x: [string, number] = [];
// let x: [string, number] = [5, 10];
let x: [string, number] = ["5", 10];

let notSure: any = 4;
let notSure2: any = "4";
let notSure3: any = [1, 2];

function xxx(): void {
  console.log(123);
  //   return "10";
  //   return Math.random().toString();
  //   return 10;
}
// let a: number = xxx();

// let n: number = null;

interface XXX {
  length: number;
}

let someValue: object = { name: "nick" };
// let strLength: number = someValue.length;
// let strLength: number = (<XXX>someValue).length;
let strLength: number = (<XXX>someValue).length;

// let strLength: number = (<string>someValue).length;
