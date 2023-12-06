// A class is a blueprint 
class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }

    // static function are associated with class not objects.
    static myType() {
        console.log("I am a Animal")
    }

    speak() {
        console.log("Hi there! " + this.speaks);
    }
}

// objects
let dog = new Animal("Dog", 4, "bhow bhow");
let cat = new Animal("Cat", 4, "meow meow");
// calling a function on an object
dog.speak();
cat.speak();

console.log(Animal.myType())