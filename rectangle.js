class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }
}
var res = new Square(2,5);
console.log(res);
