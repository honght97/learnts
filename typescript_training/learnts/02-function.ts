// no return
function funcNoReturn(): void {
  console.log("funcNoReturn");
}
funcNoReturn();
// return a number
function funcReturnNumber(x: number, y: number): number {
  return x + y;
}
console.log(funcReturnNumber(2, 3));
// return an array string
function funcReturnArrStr(): string[] {
  return ["a", "b"];
}
console.log(funcReturnArrStr());
// return unk-now data type
function funcReturnUnk(): unknown {
  return "unk-now";
}
console.log(funcReturnUnk());
