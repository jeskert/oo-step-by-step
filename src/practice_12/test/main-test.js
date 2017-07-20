"use strict";

describe("practice-12", function(){
    it("When a student join class, then the teacher who teach the class should print he knows it", function(){
        let class1 = new Klass(1);
        let class2 = new Klass(2);
        let classes = [];
        classes.push(class2);
        let student = new Student(1, "Tom", 21, class1);
        let teacher = new Teacher(2, "Jerry", 32, classes);
        spyOn(console, 'log');

        class2.appendMember(student);

        let expectString = 'I am Jerry. I know Tom has joined Class 2.'
        expect(console.log).toHaveBeenCalledWith(expectString);
    });

    it("When a student become a leader of class, then the teacher who teach the class should print he knows it", function(){
        let class1 = new Klass(1);
        let class2 = new Klass(2);
        let classes = [];
        classes.push(class2);
        classes.push(class1);
        let student = new Student(1, "Tom", 21, class1);
        let teacher = new Teacher(2, "Jerry", 32, classes);
        spyOn(console, 'log');

        class2.assignLeader(student);

        let expectString = 'I am Jerry. I know Tom become Leader of Class 2.'
        expect(console.log).toHaveBeenCalledWith(expectString);
    });
});