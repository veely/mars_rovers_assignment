const chai = require('chai');
const expect = chai.expect;

const assets = require('../mars_rovers.js')
const Rover = assets.Rover;
const setGridSize = assets.setGridSize;
const plateau = assets.plateau;

describe("Rover", function(){
  let rover1, rover2, instructions1, instructions2;
  before(() => {
    setGridSize(15, 10);
    instructions1 = "MMMRMMMMM";
    instructions2 = "RRMMMMMM";
  });
  
  describe("Path Obstruction", function() {
    context("When a rover tries to move through a path blocked by another rover", () => {
      it("should return 'blocked'", function() {
        rover1 = new Rover("0 0 N", "Rover#1");
        rover1.navigate(instructions1);
        rover2 = new Rover("1 3 W", "Rover#2");
        expect(rover2.navigate(instructions2)).to.equal("blocked");
      });
    });
  });
});