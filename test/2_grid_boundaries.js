const chai = require('chai');
const expect = chai.expect;

const assets = require('../mars_rovers.js')
const Rover = assets.Rover;
const setGridSize = assets.setGridSize;
const plateau = assets.plateau;

describe("Rover", function(){
  let rover1, rover2, instructions1, instructions2;
  before(() => {
    setGridSize(5, 4);
    rover1 = new Rover("4 1 S", "Rover#1");
    instructions1 = "LMMMMMRMRM";
  });
  
  describe("Grid Boundaries", function() {
    context("When rover at '4 1 S', given instructions 'LMMMMMRMRM'", () => {
      it("should return '4 0 W'", function() {
        rover1.navigate(instructions1);
        expect(rover1.position).to.equal("4 0 W");
      });
    });
    
    context("When attempting to deploy rover outside of grid boundaries", () => {
      it("deployed status should return 'false'", function() {
        rover2 = new Rover("6 4 E", "Rover#2");
        expect(rover2.deployed).to.equal(false);
      });
    });
  });
});