"use strict";
class animal {
    name;
    age;
    species;
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getAge() {
        return this.age;
    }
    set setAge(age) {
        if (age >= 0) {
            this.age = age;
        }
        else {
            console.log("Age cannot be negative.");
        }
    }
}
class dog extends animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.getName} Woofs!`);
    }
}
class cat extends animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.getName} meows!`);
    }
}
class rabits extends animal {
    breed;
    constructor(name, age, species, breed) {
        super(name, age, species);
        this.breed = breed;
    }
    speak() {
        console.log(`${this.getName} nothing`);
    }
}
const cho = new dog("Tom", 10, "Dog", "Husky");
const meo = new cat("Jerry", 5, "Cat", "Siamese");
