const chai = require('chai');
const expect = chai.expect;

const assets = require('../mars_rovers.js')
const Rover = assets.Rover;
const setGridSize = assets.setGridSize;
const plateau = assets.plateau;

describe("Rover", function(){
  let rover1, rover2, instructions1, instructions2;
  before(() => {
    setGridSize(10, 10);
    rover1 = new Rover("1 2 N", "Rover#1");
    rover2 = new Rover("3 3 E", "Rover#2");
    instructions1 = "LMLMLMLMM";
    instructions2 = "MMRMMRMRRM";
  });
  
  describe("Rover Navigation", function() {
    context("When rover at '1 2 N', given instructions 'LMLMLMLMM'", () => {
      it("should return '1 3 N'", function() {
        rover1.navigate(instructions1);
        expect(rover1.position).to.equal("1 3 N");
      });
    });
    
    context("When rover at '3 3 E', given instructions 'MMRMMRMRRM'", () => {
      it("should return '5 1 E'", function() {
        rover2.navigate(instructions2);
        expect(rover2.position).to.equal("5 1 E");
      });
    });
  });
});