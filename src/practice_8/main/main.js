class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name,age ,klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return `${super.introduce()} I am a Student. I am at Class ${this.klass}`;
    }
}

class Teacher extends Person {
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        let classStr = this.klass === undefined || this.klass == null ? 'No Class' : `Class ${this.klass.number}`;
        return `${super.introduce()} I am a Teacher. I teach ${classStr}.`;
    }

    introduceWith(student) {
        let teachStr = student.klass.number == this.klass.number ? `teach ${student.name}` : `don't teach ${student.name}`;
        return `${super.introduce()} I am a Teacher. I ${teachStr}.`
    }
}

class Klass {
    constructor(number) {
        this.number = number;
    }
}