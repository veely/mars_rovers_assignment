# Mars Rovers

Mars Rovers is an assignment written to be assessed as part of an interview process. It is written in JavaScript and run using Nodejs.

## Getting Started

1. Clone this repository into your machine.
2. Install dependencies using the `npm install` command.
3. Run the application using `node index.js [path_of_text_file]`. Sample text files are included under `./input/`.
4. Run all tests using `npm test`. Individual tests can be run using `npm test -- "test/1*.js"`, `npm test -- "test/2*.js"`, etc.

## Dependencies

- Mocha
- Chai

## Design Decisions

**Plateau Grid Implementation**
- For the plateau grid, I decided to use a two-dimensional array:
  1. Visual representation of the grid and rover coordinates
  2. Easier to debug as a result of the above reason
  3. When app wants to check if coordinate (x, y) is blocked, it simply checks the contents of plateau[y][x]

**Path Obstruction and Plateau Boundaries**
- Since the assignment requires that an upper-right corner be set for the plateau grid, it has been decided that it would only make sense to set restrictions to rover coordinates. Rovers ignore 'M' commands until they're rotated to face valid coordinates.
- Assumption: Rovers cannot move through obstacles (ie. other rovers), so instead I decided to have rovers ignore 'M' commands they're rotated to a direction that isn't blocked off.
- Assumption: Rovers are all deployed before any of them attempt to navigate, therefore it is possible for the first moving rover to be blocked by another during navigation.

**Error Checking**
- If no text file is supplied, message is displayed to user and app won't run.
- If text file doesn't have correct number of inputs, message is displayed to user and app won't run.
- Extra numbers/characters in coordinate inputs will be ignored.
- Does not allow letters to be used for (x, y) coordinates.
- Rover heading/direction only accepts 'N', 'S', 'E' or 'W'.
