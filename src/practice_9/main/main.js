class Person {
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(id, name,age ,klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        let str = this.klass.leader == this.id ?
            `Leader of Class ${this.klass.number}` : `at Class ${this.klass.number}`;
        return `${super.introduce()} I am a Student. I am ${str}.`;
    }
}

class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        let classString = this.klass === undefined || this.klass == null ? 'No Class' : `Class ${this.klass.number}`;
        return `${super.introduce()} I am a Teacher. I teach ${classString}.`;
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

    assignLeader(student) {
        this.leader = student.id;
    }
}