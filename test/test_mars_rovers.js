const chai = require('chai');
const expect = chai.expect;

const Rover = require('../mars_rovers.js');

describe("navigate", function() {
  let rover1, gridSize, instructions;
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
      expect(rover1.roverPosition).to.equal("1 3 N");
    });
  });

  context("When rover at '3 3 E', given instructions 'MMRMMRMRRM'", () => {
    it("should return '1 3 N'", function() {
      expect(rover2.roverPosition).to.equal("5 1 E");
    });
  });
});