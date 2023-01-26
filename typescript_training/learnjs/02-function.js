"use strict";
function funcNoReturn() {
    console.log("funcNoReturn");
}
funcNoReturn();
function funcReturnNumber(x, y) {
    return x + y;
}
console.log(funcReturnNumber(2, 3));
function funcReturnArrStr() {
    return ["a", "b"];
}
console.log(funcReturnArrStr());
function funcReturnUnk() {
    return "unk-now";
}
console.log(funcReturnUnk());
function userInfo1(name, age) {
    return `my name is${name}, ${age} years old`;
}
console.log(userInfo1("john", 32));
function userInfo2(name = "test", age = 24) {
    return `my name is${name}, ${age} years old`;
}
console.log(userInfo2("john", 32));
console.log(userInfo2());
function userInfo3(name, age) {
    if (age == null) {
        return `my name is${name}`;
    }
    else {
        return `my name is${name}, ${age} years old`;
    }
}
console.log(userInfo3("zzzz"));
console.log(userInfo3("eee", 56));
function totalLenght(x, y) {
    return x.length + y.length;
}
console.log(totalLenght("abc", [1, 2, 3]));
console.log(totalLenght(["abc"], ["def"]));
function showInfoStudent(name, ...course) {
    console.log(course);
    return `${name} study ${course.join(", ")}`;
}
console.log(showInfoStudent("john", "es6", "php", "typescript"));
function func01(name, age) {
    return `My name is ${name}, ${age} years old`;
}
console.log("func01:", func01("func01", 23));
let func02 = function (name, age) {
    return `My name is ${name}, ${age} years old`;
};
console.log("func02:", func02("func02", 24));
let func03 = function (name, age) {
    return `My name is ${name}, ${age} years old`;
};
console.log("func03:", func03("func03", 33));
let f1 = function (i) {
    return i * i;
};
let f2 = function (i) {
    return i * i;
};
let f3 = (i) => {
    return i * i;
};
let f4 = (i) => i * i;
let f5 = (i) => {
    return i * i;
};
console.log("f1", f1(2));
console.log("f2", f2(2));
console.log("f3", f3(2));
console.log("f4", f4(2));
console.log("f5", f5(2));
function funcOver(x) {
    if (typeof x == "string") {
        return 100;
    }
    else if (typeof x == "number") {
        return "100";
    }
}
console.log("funcOver string: ", funcOver(100));
console.log("funcOver number: ", funcOver("test"));
