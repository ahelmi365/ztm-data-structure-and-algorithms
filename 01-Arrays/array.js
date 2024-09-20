class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(newItem) {
    if (!newItem && newItem !== "") {
      return this.length;
    }
    this.data[this.length] = newItem;
    return ++this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    --this.length;
    return lastItem;
  }

  unshiftV1(newItem) {
    if (!newItem && newItem !== "") {
      return this.length;
    }
    for (let index = this.length; index > 0; index--) {
      this.data[index] = this.data[index - 1];
    }
    this.data[0] = newItem;
    return ++this.length;
  }

  unshiftV2(newItem) {
    if (!newItem) {
      return this.length;
    }
    const newArray = {};
    newArray[0] = newItem;
    for (let index = 0; index < this.length; index++) {
      newArray[index + 1] = this.data[index];
    }
    this.data = newArray;
    return ++this.length;
  }
}
const x = new MyArray();
console.log(x);
x.push("");
console.log(x);
x.push("a");
x.push("b");
x.push("c");
x.push("d");
console.log(x);
x.unshiftV2("Z");

console.log(x);
