// no return
function funcNoReturn(): void {
  console.log("funcNoReturn");
}
funcNoReturn();
// return a number
function funcReturnNumber(x: number, y: number): number {
  return x + y;
}
console.log(funcReturnNumber(2, 3));
// return an array string
function funcReturnArrStr(): string[] {
  return ["a", "b"];
}
console.log(funcReturnArrStr());
// return unk-now data type
function funcReturnUnk(): unknown {
  return "unk-now";
}
console.log(funcReturnUnk());

// đầy đủ các tham số
function userInfo1(name: string, age: number): string {
  return `my name is${name}, ${age} years old`;
}
console.log(userInfo1("john", 32));
// giá trị mặc định cho các tham số
function userInfo2(name: string = "test", age: number = 24): string {
  return `my name is${name}, ${age} years old`;
}
console.log(userInfo2("john", 32));
console.log(userInfo2());

// tham số khuyết - truyền vào cũng đc, không truyền vào cũng được

function userInfo3(name: string, age?: number): string {
  if (age == null) {
    return `my name is${name}`;
  } else {
    return `my name is${name}, ${age} years old`;
  }
}
console.log(userInfo3("zzzz"));
console.log(userInfo3("eee", 56));

function totalLenght(x: string | unknown[], y: string | unknown[]): number {
  return x.length + y.length;
}
console.log(totalLenght("abc", [1, 2, 3]));
console.log(totalLenght(["abc"], ["def"]));

// rest parameters
function showInfoStudent(name: string, ...course: string[]): string {
  console.log(course);
  return `${name} study ${course.join(", ")}`;
}
console.log(showInfoStudent("john", "es6", "php", "typescript"));

// các loại function
function func01(name: string, age: number): string {
  return `My name is ${name}, ${age} years old`;
}
console.log("func01:", func01("func01", 23));
let func02 = function (name: string, age: number): string {
  return `My name is ${name}, ${age} years old`;
};
console.log("func02:", func02("func02", 24));

let func03: (name: string, age: number) => string = function (name, age) {
  return `My name is ${name}, ${age} years old`;
};
console.log("func03:", func03("func03", 33));
// arrow function
let f1 = function (i: number): number {
  return i * i;
};
let f2 = function (i: number) {
  return i * i;
};
let f3 = (i: number): number => {
  return i * i;
};
let f4 = (i: number) => i * i;
let f5 = (i: number) => {
  return i * i;
};
console.log("f1", f1(2));
console.log("f2", f2(2));
console.log("f3", f3(2));
console.log("f4", f4(2));
console.log("f5", f5(2));

// overload - khai báo 2 hàm cùng tên nhưng có tham số or kết quả trả về khác nhau
function funcOver(x: string): number;
function funcOver(x: number): string;
function funcOver(x: unknown): unknown {
  if (typeof x == "string") {
    return 100;
  } else if (typeof x == "number") {
    return "100";
  }
}
console.log("funcOver string: ", funcOver(100));
console.log("funcOver number: ", funcOver("test"));
