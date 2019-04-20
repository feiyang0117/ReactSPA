class Person {
    constructor(name, age ) {
        this.name = name;
        this.age = age;
    } 
    
    getNames () {
        return this.name;
    }

    getAges () {
        return this.age;
    }
}

let person = new Person('gao', 30)
console.log(person)

class Man extends Person {
    constructor(name, age) {
        super(name, age);
    }

    getGender () {
        return 'male';
    }
}

let man =new Man('gao', 20)
console.log(man)