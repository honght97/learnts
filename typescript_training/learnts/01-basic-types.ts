// boolean
let free: boolean = true;
free = false;
console.log(free);

// number
let score: number = 10;
console.log(score);

// string
let elm: string = "Hello";
elm = `elem: ${free} and ${score}`;
console.log(elm);

// array
let arr1: Array<number>;
arr1 = [1, 2, 3];
console.log("arr1", arr1);
let arr2: string[];
arr2 = ["test", "ta", "twa"];
arr2.push("typescript");
console.log("arr2", arr2);

// tuple array
let tuple: [number, string];
tuple = [1, "test"];
console.log("tuple", tuple);

// object types
let obj: { type: string; model: string; price: number };
obj = {
  type: "honda",
  model: "classic",
  price: 1000,
};
console.log("obj type:", obj["type"]);

// enum
enum DIRECT {
  north = 5,
  east,
  south,
  west,
}
console.log(DIRECT.north);
console.log(DIRECT.west);

enum STATUS {
  created,
  processing,
  finished,
}
let todoStatus: STATUS = STATUS.processing;
console.log("todoStatus", todoStatus);

// type aliases
type Car = {
  year: number;
  type: string;
  model: string;
};
function print(pt: Car) {
  console.log(`Type aliases: ${pt.year} - ${pt.type} - ${pt.model}`);
}
print({ year: 2023, type: "car type", model: "car model" });

// interface
interface CarInterface {
  year: number;
  type: string;
  model: string;
}
interface CarPr extends CarInterface {
  run: boolean;
}
let printInterface = (pt: CarInterface) => {
  console.log(`Interface: ${pt.year} - ${pt.type} - ${pt.model}`);
};
let printCar = (pt: CarPr) => {
  console.log(
    `printCar extend CarInterface: ${pt.year} - ${pt.type} - ${pt.model}- ${pt.run}`
  );
};
printCar({ year: 2023, type: "type", model: "model", run: false });

// union(or) type
const printStatusCode = (code: string | number | boolean) => {
  console.log(`printStatusCode: ${typeof code}`, code);
};
printStatusCode(404);
printStatusCode("404");
printStatusCode(true);

// any
let typeAny: any;
typeAny = 4;
typeAny = "any";
console.log("typeAny:", typeAny);
let typeAnyArr: any[];
typeAnyArr = [1, 2, "2te", true];
console.log("typeAnyArr: ", typeAnyArr);

// void
function showInfo(): void {
  console.log("show info function");
}
showInfo();

// type assertions
let typeAssertion: unknown;
typeAssertion = "hello";
// must to about type string before get length use keyword as
console.log("typeAssertion", (typeAssertion as string).length);

// interface object
interface CourseInterface {
  name: string;
  time: number;
  free?: boolean;
}
let courseObj: CourseInterface;
courseObj = {
  name: "es6",
  time: 5,
};
console.log("courseObj: ", courseObj);
let courseObj1: CourseInterface = {
  name: "php",
  time: 4,
  free: true,
};
console.log("courseObj1: ", courseObj1);

// interface array
let course: string[] = ["es6", "typescript"];
console.log("course", course);
interface CourseList {
  [index: number]: string;
}
let courseItem: CourseList = ["php", "javascript"];
console.log("courseItem", courseItem);
