"use strict";

describe("OO入门", function(){
    it("写一个类-1", function(){
        let result = new Person("Tom", 21).introduce();
        let expect_string = 'My name is Tom. I am 21 years old.';

        expect(expect_string).toEqual(result);

    });
});