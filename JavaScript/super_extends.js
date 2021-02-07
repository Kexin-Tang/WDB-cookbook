// class Cat {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating!`;
//     }
//     meow() {
//         return `MeoWWWWWWW!`
//     }
// }

// class Dog {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating!`;
//     }
//     bark() {
//         return `WOOOOOOF!!`
//     }
// }


class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`;
    }
}

class Cat extends Pet {
    constructor(name, age, liveLeft = 9) {
        // use `super` to inherit original properties and add some new properties.
        super(name, age);
        this.liveLeft = liveLeft;
    }
    meow() {
        return `MeoWWWWWWW!`
    }
}

class Dog extends Pet {
    bark() {
        return `WOOOOOOF!!`
    }
    // this new function will overwrite the old version `eat()`
    eat() {
        return 'Dog is eating!';
    }
}

let cat = new Cat('popo', 5, 6);
console.log(cat);