import { StringValidator02 } from "./Validation02";
const lettersRegexp = /^[A-Za-z]+$/;
export class LettersOnlyValidator02 implements StringValidator02 {
  isAcceptable(s: string) {
    return lettersRegexp.test(s);
  }
}
