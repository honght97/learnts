"use strict";
class Course01 {
    constructor(name) {
        this._name = name;
    }
    showCourseInfo() {
        console.log(`${this._name}`);
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
}
let courseObj02 = new Course01("Typescript");
console.log(courseObj02);
console.log("name:", courseObj02.name);
courseObj02.name = "typescript training";
console.log("name change:", courseObj02.name);
class Laptop {
    keyBoard() {
        console.log("laptop.keyboard");
    }
    chipset() {
        console.log("laptop.chipset");
    }
}
class LaptopDell extends Laptop {
    keyBoard() {
        console.log("LaptopDell.keyboard");
    }
    mainBoard() {
        console.log("LaptopDell.mainBoard");
        return "123";
    }
}
let laptopObj = new LaptopDell();
laptopObj.chipset();
laptopObj.mainBoard("dd");
laptopObj.keyBoard();
class Machine {
    caculate(x, y) {
        return x + y;
    }
}
class Superman extends Machine {
    constructor(name) {
        super();
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    fly() {
        console.log("fly");
    }
}
let john = new Superman("john");
john.eat();
john.sleep();
john.fly();
console.log(john.caculate(2, 4));
