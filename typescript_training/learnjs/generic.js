"use strict";
function showNumberInfo(x) {
    return x;
}
function showStringInfo(x) {
    return x;
}
function showInfo01(x) {
    return x;
}
showInfo01("123");
class StudyGeneric {
    static printArray(params) {
        console.log(params);
    }
}
StudyGeneric.printArray([1, 2, 3, 5]);
StudyGeneric.printArray(["t", "ts", "aj"]);
StudyGeneric.printArray(["t", "1", 3, true]);
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showProductInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
let productObj = new Product("01", "haha", 33999);
let productObj02 = new Product(1, "dđ", 33999);
let productObj03 = new Product("111", 111, false);
productObj.showProductInfo();
productObj02.showProductInfo();
productObj03.showProductInfo();
