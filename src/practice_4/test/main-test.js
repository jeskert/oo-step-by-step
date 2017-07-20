"use strict";

describe("OO入门", function(){
    it("写一个类-worker", function(){
        let student = new Worker("Tom", 21);
        let expect_string = 'My name is Tom. I am 21 years old. I am a Worker. I have a job.';

        expect(student.introduce()).toEqual(expect_string);

    });
});