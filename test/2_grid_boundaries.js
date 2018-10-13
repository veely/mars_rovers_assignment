const chai = require('chai');
const expect = chai.expect;

const assets = require('../mars_rovers.js')
const Rover = assets.Rover;
const setGridSize = assets.setGridSize;

describe("Grid Boundaries", function() {
  let rover1, rover2, instructions;
  beforeEach(() => {
    setGridSize(6, 4);
    rover1 = new Rover("4 1 S");
    instructions1 = "LMMMMMRMRM";
    rover1.navigate(instructions1);
  });

  context("When rover at '4 1 S', given instructions 'LMMMMMRMRM'", () => {
    it("should return '5 0 W'", function() {
      expect(rover1.position).to.equal("5 0 W");
    });
  });
});