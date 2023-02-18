"use strict";
var Validation01;
(function (Validation01) {
    let lettersRegexp = /^[A-Za-z]+$/;
    let numberRegexp = /^[0-9]+$/;
    class LettersOnlyValidator01 {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation01.LettersOnlyValidator01 = LettersOnlyValidator01;
    class ZipCodeValidator01 {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation01.ZipCodeValidator01 = ZipCodeValidator01;
})(Validation01 || (Validation01 = {}));
let strings01 = ["Hello", "98052", "101"];
let validators01 = {};
validators01["ZIP code"] = new Validation01.ZipCodeValidator01();
validators01["Letters only"] = new Validation01.LettersOnlyValidator01();
for (let s of strings01) {
    for (let name in validators01) {
        let isMatch01 = validators01[name].isAcceptable(s);
        console.log(`'${s}' ${isMatch01 ? "matches" : "does not match"} '${name}'.`);
    }
}
