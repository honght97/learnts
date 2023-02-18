"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LettersOnlyValidator02_1 = require("./LettersOnlyValidator02");
const ZipCodeValidator02_1 = require("./ZipCodeValidator02");
let strings02 = ["Hello", "98052", "101"];
let validators02 = {};
validators02["ZIP code"] = new ZipCodeValidator02_1.ZipCodeValidator02();
validators02["Letters only"] = new LettersOnlyValidator02_1.LettersOnlyValidator02();
for (let s of strings) {
    for (let name in validators02) {
        console.log(`"${s}" - ${validators02[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
}
