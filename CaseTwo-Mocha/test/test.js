const { createArray } = require("../index.js");
var chai = require("chai");
var chai = require("chai");
var assert = chai.assert; // Using Assert style
var expect = chai.expect; // Using Expect style
var should = chai.should(); // Using Should style

describe("Testing array function", function () {
  let initialValue = 1;

  beforeEach(() => {
    initialValue++;
  });

  //using assert
  it("retun type array", () => {
    assert.typeOf(createArray(initialValue), "array", "Wrong type");
    // assert.isArray(createArray(initialValue), "Wrong type");
  });
  it("Length of array", () => {
    assert.lengthOf(
      createArray(initialValue),
      initialValue,
      "Did not give same length"
    );
  });

  //using should
  it("include 1", () => {
    createArray(3).should.have.property(1);
  });

  //pending case
  it("length + include 1 + type", () => {
    // createArray(3).should.be.a("array").have.lengthOf(3).property(1);
  });
});
