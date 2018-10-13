const assets = require('./mars_rovers.js')
const Rover = assets.Rover;
const setGridSize = assets.setGridSize;

const fs = require('fs');
const input = process.argv[2];
let data = fs.readFileSync(input, 'utf8')

//For Windows files, split using \r\n. For Linux files, split using \n.
let inputData = data.split('\r\n');

//Converts first line of input into numbers
let gridSize = inputData[0].split(' ').map(Number);
let roverPosition = inputData[1];
let instructions = inputData[2];
setGridSize(gridSize[0], gridSize[1]);

rover1 = new Rover(roverPosition);
instructions1 = instructions;
rover1.navigate(instructions1);

console.log(rover1.position);