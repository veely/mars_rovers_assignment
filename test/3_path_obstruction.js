const chai = require('chai');
const expect = chai.expect;

const assets = require('../mars_rovers.js')
const Rover = assets.Rover;
const setGridSize = assets.setGridSize;

describe("Grid Boundaries", function() {
  let rover1, rover2, instructions;
  beforeEach(() => {
    setGridSize(15, 10);
    rover1 = new Rover("0 0 N");
    instructions1 = "MMMRMMMMM";
    rover1.navigate(instructions1);
    rover2 = new Rover("1 3 W");
    instructions2 = "RRMMMMMM";
  });

  context("When a rover tries to move through a path blocked by another rover", () => {
    it("should return 'Error: Path is obstructed by another rover!'", function() {
      expect(rover2.navigate(instructions1)).to.equal("Error: Path is obstructed by another rover!");
    });
  });
});