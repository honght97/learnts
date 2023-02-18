function showNumberInfo(x: number): number {
  return x;
}
function showStringInfo(x: string): string {
  return x;
}
function showInfo01<T>(x: T) {
  return x;
}
showInfo01<string>("123");
class StudyGeneric {
  static printArray<T>(params: T[]): void {
    console.log(params);
  }
}
StudyGeneric.printArray<number>([1, 2, 3, 5]);
StudyGeneric.printArray<string>(["t", "ts", "aj"]);
StudyGeneric.printArray<unknown>(["t", "1", 3, true]);

// id, name, price của 1 product
class Product<A, B, C> {
  id: A;
  name: B;
  price: C;
  constructor(id: A, name: B, price: C) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  showProductInfo() {
    console.log(`${this.id} - ${this.name} - ${this.price}`);
  }
}
let productObj = new Product<string, string, number>("01", "haha", 33999);
let productObj02 = new Product<number, string, number>(1, "dđ", 33999);
let productObj03 = new Product<string, number, boolean>("111", 111, false);
productObj.showProductInfo();
productObj02.showProductInfo();
productObj03.showProductInfo();
