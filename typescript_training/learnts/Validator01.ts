namespace Validation01 {
  export interface StringValidator01 {
    isAcceptable(s: string): boolean;
  }
  let lettersRegexp = /^[A-Za-z]+$/;
  let numberRegexp = /^[0-9]+$/;
  export class LettersOnlyValidator01 implements StringValidator01 {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
  export class ZipCodeValidator01 implements StringValidator01 {
    isAcceptable(s: string) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }
}

// Some samples to try
let strings01 = ["Hello", "98052", "101"];
// Validators to use
let validators01: { [s: string]: Validation01.StringValidator01 } = {};
validators01["ZIP code"] = new Validation01.ZipCodeValidator01();
validators01["Letters only"] = new Validation01.LettersOnlyValidator01();
// Show whether each string passed each validator
for (let s of strings01) {
  for (let name in validators01) {
    let isMatch01 = validators01[name].isAcceptable(s);
    console.log(
      `'${s}' ${isMatch01 ? "matches" : "does not match"} '${name}'.`
    );
  }
}
