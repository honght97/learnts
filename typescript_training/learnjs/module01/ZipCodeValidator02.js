"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipCodeValidator02 = void 0;
const numberRegexp = /^[0-9]+$/;
class ZipCodeValidator02 {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
exports.ZipCodeValidator02 = ZipCodeValidator02;
