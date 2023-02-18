import { LettersOnlyValidator02 } from "./LettersOnlyValidator02";
import { StringValidator02 } from "./Validation02";
import { ZipCodeValidator02 } from "./ZipCodeValidator02";

// Some samples to try
let strings02 = ["Hello", "98052", "101"];
// Validators to use
let validators02: { [s: string]: StringValidator02 } = {};
validators02["ZIP code"] = new ZipCodeValidator02();
validators02["Letters only"] = new LettersOnlyValidator02();
// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators02) {
    console.log(
      `"${s}" - ${
        validators02[name].isAcceptable(s) ? "matches" : "does not match"
      } ${name}`
    );
  }
}
