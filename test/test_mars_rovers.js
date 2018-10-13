const chai = require('chai');
const expect = chai.expect;

const Rover = require('../mars_rovers.js');

describe("navigate", function() {
	let rover1, gridSize, instructions;
	beforeEach(() => {
		rover1 = new Rover("1 2 N");
		instructions = "LMLMLMLMM";
		rover1.navigate(instructions);
	});

	context("When given instructions 'LMLMLMLMM'", () => {
		it("should return '1 3 N'", function() {
			expect(rover1.roverPosition).to.equal("1 3 N");
		});
	});
});