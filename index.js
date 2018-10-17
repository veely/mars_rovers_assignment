const assets = require('./mars_rovers.js')
const Rover = assets.Rover;
const setGridSize = assets.setGridSize;
const showGrid = assets.showGrid;

const fs = require('fs');
const input = process.argv[2];
let fileData;
try {
  fileData = fs.readFileSync(input, 'utf8')
} catch(err) {
  console.log("Please provide a valid path to a text file for input!\nExample: `node index.js input/example.txt`");
} finally {
  if (fileData) {
    //If running on Windows, split using \r\n. If running on Linux or Mac, split using \n.
    let inputData;
    if (fileData.includes("\r\n")) {
      inputData = fileData.split('\r\n');
    } else if (fileData.includes("\n")) {
      inputData = fileData.split('\n');
    }

    if (inputData.length > 2 && inputData.length % 2 !== 0 ) {
      //Converts first line of input into numbers
      let gridSize = inputData[0].split(' ').map(Number);
      if (setGridSize(gridSize[0], gridSize[1]) !== "invalid") {
      
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
          let roverPosition = data[0].toUpperCase();
          instructions.push(data[1]);
          rovers[index] = new Rover(roverPosition, "Rover#" + (index + 1));
        });

        rovers.map((rover, index) => {
          if (rover.deployed) {
            rover.navigate(instructions[index]);
            if (rover.blocked) {
              console.log(rover.id + ": Path has been obstructed by an obstacle. Some instructions were ignored.\n");
            }
            if (rover.hitBoundaries) {
              console.log(rover.id + ": Due to plateau boundaries, some instructions were ignored.\n")
            }
          }
        });

        console.log("OUTPUT:")
        rovers.map((rover, index) => {
          if (rover.deployed) {
            console.log(rover.id + " position: " + rover.position);
          } else {
            console.log(rover.id + " position: Not deployed due to invalid coordinates.");
          }
        });

        // OPTIONAL: Show the visual layout of the grid plateau
        // console.log(showGrid());
      } else {
        console.log("ERROR: Invalid grid size input. Please make sure the input consists of numbers only.")
      }
    } else {
      console.log("ERROR: Invalid number of arguments. Please make sure the input is formatted like the following example: \n\n 8 7 \n 2 4 E \n LMMRRMLMRMM \n 5 1 N \n MMMMRMMM")
    }
  } else {
    console.log("Exiting...")
  }
}
