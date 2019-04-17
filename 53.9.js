// OVERRIDING METHOD FROM PARENT CLASS

class Shape {
    move() {
        console.log("I'm the parent");
    }
}

class Circle extends Shape {
    move() {
        console.log("I'm the child"); // this one prevails without  super.move()
        super.move(); // with this both run: I'm the child / I'm the parent
    }
}

const c = new Circle();
