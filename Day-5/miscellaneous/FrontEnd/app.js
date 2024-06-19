// Revisiting JS
// object oriented programing -> To structure our code
// prototypes,new operators,constructors,classes,keyword(extends,super)

// Object prototypes -> prototypes are the mechanism by which js objs inherit features from one another.
//                   -> It is like a single template object that all object inherit methods and properties form without having their own copy.
//                   -> Every object in js have an built-in property, which is called its prototype.

// let arr = [1, 2, 3, 4];
// arr.__proto__; // (reference)
// Array.prototype / String.prototype; // (actual object)

// Factory function -> A function that creates objects
// function personMaker(name, age) {
//     let person = {
//         names: name,
//         age: age,
//         talk() {
//             console.log(`Hello, my name is ${this.names}.`);
//         },
//         likes: likes,
//     };
//     return person;
// }

// let p1 = personMaker("unknown", 20);
// p1.talk();

// new operator -> The new operator lets developers create an instance of a user-defined object type or of one of the built-in object types that has a constructor function.
// Constructors -> doesn't return anything and starts with capital letter
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk=function(){
//     console.log(`Hello, my name is ${this.name}`);
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 35);

// classes -> are a template for creating objects.
//         -> The constructor method is a special method of a class for creating and initializing an object instance of that class.
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 35);

// Inheritence -> is mechanism that allows us to create new classes on the basis of already existing classes.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}
