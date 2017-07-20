"use strict";

describe("OO入门", function(){
    it("写一个类-2", function(){
        let student = new Student("Tom", 21, 2);
        let expect_string = 'My name is Tom. I am 21 years old. I am a Student. I am at Class 2';

        expect(student.introduce()).toEqual(expect_string);

    });
});