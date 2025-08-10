class animal {
    private name: string;
    protected age: number;
    public species: string;
    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    speak(): void {
        console.log(`${this.name} makes a sound.`);
    }
    get getName(): string {
        return this.name;
    }
    set setName(name: string) {
        this.name = name;
    }
    get getAge(): number {
        return this.age;
    }
    set setAge(age: number) {
        if (age >= 0) {
            this.age = age;
        } else {
            console.log("Age cannot be negative.");
        }


    }
}
class dog extends animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak(): void {
        console.log(`${this.getName} Woofs!`);
    }
}
class cat extends animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak(): void {
        console.log(`${this.getName} meows!`);
    }
}
class rabits extends animal {
    public breed: string;
    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }
    speak(): void {
        console.log(`${this.getName} nothing`);
    }
}
const cho = new dog("Tom",10,"Dog","Husky");
const meo = new cat("Jerry", 5, "Cat", "Siamese");