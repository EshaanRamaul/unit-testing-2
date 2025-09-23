const { expect } = require("chai");
const mylib = require("../mylib");

describe("mylib Arithmetic Functions", function () {

  before(function () {
    console.log("Starting tests...");
  });

  after(function () {
    console.log("All tests completed.");
  });

  it("adds two numbers", function () {
    expect(mylib.add(2, 2)).to.equal(4);
  });

  it("subtracts two numbers", function () {
    expect(mylib.subtract(5, 2)).to.equal(3);
  });

  it("multiplies two numbers", function () {
    expect(mylib.multiply(4, 4)).to.equal(16);
  });

  it("divides two numbers", function () {
    expect(mylib.divide(10, 2)).to.equal(5);
  });

  it("throws an error when dividing by zero", function () {
    expect(() => mylib.divide(10, 0)).to.throw("ZeroDivision: Cannot divide by zero");
  });
});
