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
