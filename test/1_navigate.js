const chai = require('chai');
const expect = chai.expect;

const Rover = require('../mars_rovers.js');

describe("Rover Navigation", function() {
  let rover1, rover2, instructions;
  beforeEach(() => {
    rover1 = new Rover("1 2 N");
    rover2 = new Rover("3 3 E");
    instructions1 = "LMLMLMLMM";
    instructions2 = "MMRMMRMRRM";
    rover1.navigate(instructions1);
    rover2.navigate(instructions2);
  });

  context("When rover at '1 2 N', given instructions 'LMLMLMLMM'", () => {
    it("should return '1 3 N'", function() {
      expect(rover1.position).to.equal("1 3 N");
    });
  });

  context("When rover at '3 3 E', given instructions 'MMRMMRMRRM'", () => {
    it("should return '5 1 E'", function() {
      expect(rover2.position).to.equal("5 1 E");
    });
  });

  
});