"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LettersOnlyValidator02 = void 0;
const lettersRegexp = /^[A-Za-z]+$/;
class LettersOnlyValidator02 {
    isAcceptable(s) {
        return lettersRegexp.test(s);
    }
}
exports.LettersOnlyValidator02 = LettersOnlyValidator02;
