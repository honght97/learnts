"use strict";
let free = true;
free = false;
console.log(free);
let score = 10;
console.log(score);
let elm = "Hello";
elm = `elem: ${free} and ${score}`;
console.log(elm);
let arr1;
arr1 = [1, 2, 3];
console.log("arr1", arr1);
let arr2;
arr2 = ["test", "ta", "twa"];
arr2.push("typescript");
console.log("arr2", arr2);
let tuple;
tuple = [1, "test"];
console.log("tuple", tuple);
let obj;
obj = {
    type: "honda",
    model: "classic",
    price: 1000,
};
console.log("obj type:", obj["type"]);
var DIRECT;
(function (DIRECT) {
    DIRECT[DIRECT["north"] = 5] = "north";
    DIRECT[DIRECT["east"] = 6] = "east";
    DIRECT[DIRECT["south"] = 7] = "south";
    DIRECT[DIRECT["west"] = 8] = "west";
})(DIRECT || (DIRECT = {}));
console.log(DIRECT.north);
console.log(DIRECT.west);
var STATUS;
(function (STATUS) {
    STATUS[STATUS["created"] = 0] = "created";
    STATUS[STATUS["processing"] = 1] = "processing";
    STATUS[STATUS["finished"] = 2] = "finished";
})(STATUS || (STATUS = {}));
let todoStatus = STATUS.processing;
console.log("todoStatus", todoStatus);
function print(pt) {
    console.log(`Type aliases: ${pt.year} - ${pt.type} - ${pt.model}`);
}
print({ year: 2023, type: "car type", model: "car model" });
let printInterface = (pt) => {
    console.log(`Interface: ${pt.year} - ${pt.type} - ${pt.model}`);
};
let printCar = (pt) => {
    console.log(`printCar extend CarInterface: ${pt.year} - ${pt.type} - ${pt.model}- ${pt.run}`);
};
printCar({ year: 2023, type: "type", model: "model", run: false });
const printStatusCode = (code) => {
    console.log(`printStatusCode: ${typeof code}`, code);
};
printStatusCode(404);
printStatusCode("404");
printStatusCode(true);
let typeAny;
typeAny = 4;
typeAny = "any";
console.log("typeAny:", typeAny);
let typeAnyArr;
typeAnyArr = [1, 2, "2te", true];
console.log("typeAnyArr: ", typeAnyArr);
function showInfo() {
    console.log("show info function");
}
showInfo();
