const chai = require('chai');
const expect = chai.expect;

const assets = require('../mars_rovers.js')
const Rover = assets.Rover;
const setGridSize = assets.setGridSize;
const plateau = assets.plateau;

describe("Rover", function(){
  let rover1, rover2, instructions1, instructions2;
  beforeEach(() => {
    // plateau.occupied = [];
  });
  
  describe("Grid Boundaries", function() {
    setGridSize(5, 4);
    rover1 = new Rover("4 1 S");
    instructions1 = "LMMMMMRMRM";
    
    context("When rover at '4 1 S', given instructions 'LMMMMMRMRM'", () => {
      it("should return '5 0 W'", function() {
        rover1.navigate(instructions1);
        expect(rover1.position).to.equal("5 0 W");
      });
    });
  });
});