import { StringValidator02 } from "./Validation02";
const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator02 implements StringValidator02 {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}
