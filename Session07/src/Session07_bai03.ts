abstract class Animal{
    abstract makeNoise(): void;
    abstract printName(): void;


}
class Dog extends Animal {
    makeNoise(): void {
        console.log("gau gau");
    }
    printName(): void {
        console.log("Dog");
    }
}
class Cat extends Animal {
    makeNoise(): void {
        console.log("meo meo");
    }
    printName(): void {
        console.log("Cat");
    }
}
let dog = new Dog();
dog.makeNoise();
dog.printName();
let cat = new Cat();
cat.makeNoise();
cat.printName();