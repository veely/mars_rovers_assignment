const assets = require('./mars_rovers.js')
const Rover = assets.Rover;
const setGridSize = assets.setGridSize;
const plateau = assets.plateau;

const fs = require('fs');
const input = process.argv[2];
let data = fs.readFileSync(input, 'utf8')

//For Windows files, split using \r\n. For Linux files, split using \n.
let inputData = data.split('\r\n');

if (inputData.length > 2 && inputData.length % 2 !== 0 ) {
  //Converts first line of input into numbers
  let gridSize = inputData[0].split(' ').map(Number);
  setGridSize(gridSize[0], gridSize[1]);
  
  //Removes the grid size from the input array so rover data is isolated
  inputData.splice(0, 1);

  let roverData = [];

  while (inputData.length) {
    //Every 2 elements should be separate rover data
    roverData.push(inputData.splice(0, 2));
  }

  let rovers = [];
  let instructions = [];

  roverData.map((data, index) => {
    let roverPosition = data[0];
    instructions.push(data[1]);
    rovers[index] = new Rover(roverPosition, "Rover#" + (index + 1));
  });

  rovers.map((rover, index) => {
    if (rover.navigate(instructions[index]) === "blocked") {
      console.log(rover.id + ": Path has been obstructed by another rover. Stopping at current location.")
    }
    
  });

  rovers.map((rover, index) => {
    console.log(rover.position);
  });
} else {
  console.log("ERROR: Invalid number of arguments. Please make sure the input is formatted like the following example: \n 8 7 \n 2 4 E \n LMMRRMLMRMM")
}