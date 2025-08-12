"use strict";
class Animal {
}
class Dog extends Animal {
    makeNoise() {
        console.log("gau gau");
    }
    printName() {
        console.log("Dog");
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
    printName() {
        console.log("Cat");
    }
}
let dog = new Dog();
dog.makeNoise();
dog.printName();
let cat = new Cat();
cat.makeNoise();
cat.printName();
