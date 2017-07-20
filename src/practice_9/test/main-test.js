"use strict";

describe("OO入门", function(){
    it("写一个类-2", function(){
        let klass = new Klass(2);
        let student = new Student(1, "Tom", 21, klass);
        klass.assignLeader(student);
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.';
        expect(student.introduce()).toEqual(expect_string);
    });

    it("写一个类-2", function(){
        let klass = new Klass(2);
        let student = new Student(1, "Tom", 21, klass);
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2.';
        expect(student.introduce()).toEqual(expect_string);
    });
});