"use strict";

describe("OO入门", function(){
    it("写一个类-1", function(){
        let klass = new Klass(2);
        let teacher = new Teacher(1, "Tom", 21, klass);
        klass.appendMember(student);
        klass.assignLeader(student);
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am Leader of Class 2.';
        expect(student.introduce()).toEqual(expect_string);
    });

    it("写一个类-2", function(){
        let klass2 = new Klass(2);
        let klass3 = new Klass(3);
        let teacher = new Teacher(1, "Tom", 21, klass3);
        klass2.assignLeader(student);
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 3.';
        expect(student.introduce()).toEqual(expect_string);
    });
});