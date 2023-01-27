class Course01 {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  showCourseInfo() {
    console.log(`${this._name}`);
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }
}
let courseObj02 = new Course01("Typescript");
console.log(courseObj02);
console.log("name:", courseObj02.name);
courseObj02.name = "typescript training";
console.log("name change:", courseObj02.name);

// abstract
abstract class Laptop {
  public keyBoard(): void {
    console.log("laptop.keyboard");
  }
  abstract mainBoard(abc: string): string;
  public chipset() {
    console.log("laptop.chipset");
  }
}
class LaptopDell extends Laptop {
  public keyBoard(): void {
    console.log("LaptopDell.keyboard");
  }
  public mainBoard(): string {
    console.log("LaptopDell.mainBoard");
    return "123";
  }
}

let laptopObj: Laptop = new LaptopDell();
laptopObj.chipset();
laptopObj.mainBoard("dd");
laptopObj.keyBoard();

// interface
interface People {
  name: string;
  eat(): void;
  sleep(): void;
}
interface Bird {
  fly(): void;
}
class Machine {
  caculate(x: number, y: number): number {
    return x + y;
  }
}
class Superman extends Machine implements People, Bird {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }
  eat(): void {
    console.log("eat");
  }
  sleep(): void {
    console.log("sleep");
  }
  fly(): void {
    console.log("fly");
  }
}
let john: Superman = new Superman("john");
john.eat();
john.sleep();
john.fly();
console.log(john.caculate(2, 4));
