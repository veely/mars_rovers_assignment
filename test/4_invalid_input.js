const chai = require('chai');
const expect = chai.expect;

const assets = require('../mars_rovers.js')
const Rover = assets.Rover;
const setGridSize = assets.setGridSize;
const plateau = assets.plateau;

describe("Rover", function(){
  let rover1, rover2, rover3, instructions1, instructions2, instructions3;
  beforeEach(() => {
    setGridSize(10, 10);
    
    rover2 = new Rover("3 3", "Rover#2");
    instructions1 = "LMLMLMLMM";
    
    instructions3 = "MMRMMRMRRM";
  });
  
  describe("Invalid Inputs", function() {
    context("When grid size input is invalid", () => {
      it("should return 'invalid'", function() {
        expect(setGridSize(10, 'A')).to.equal("invalid");
      });
    });
    
    context("When rover deployment given invalid coordinates", () => {
      it("deployed status should return 'false'", function() {
        rover1 = new Rover("A 1 N N", "Rover#1");
        expect(rover1.deployed).to.equal(false);
      });
    });

    context("When rover given invalid navigation instructions", () => {
      it("should give warning and continue with valid instructions", function() {
        rover2 = new Rover("3 3 E", "Rover#2");
        instructions2 = "ABCLMMM";
        rover2.navigate(instructions2);
        expect(rover2.invalidInstructions).to.equal(true);
      });
    });
  });
});