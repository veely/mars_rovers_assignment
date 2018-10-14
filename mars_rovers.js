let plateau = { 
  x: 0,
  y: 0,
  occupied: []
};

const setGridSize = (x, y) => {
  plateau.x = x;
  plateau.y = y;
}

class Rover {
  constructor(position) {
    let data = position.split(' ');
    this.x = parseInt(data[0]);
    this.y = parseInt(data[1]);
    this.heading = data[2];
  }

  get position() {
    return [this.x, this.y, this.heading].join(' ');
  }

  navigate(instructions) {
    let splitInstructions = instructions.split('');
    for (let step in splitInstructions) {
      switch(splitInstructions[step]) {
        case 'L':
          this.rotateLeft();
          break;
        case 'R':
          this.rotateRight();
          break;
        case 'M':
          if (this.moveForward(step) === "blocked") {
            return "blocked";
          }
          break;
        default:
          break;
      }
    }
    plateau.occupied.push('' + this.x + ' ' + this.y);
  }

  rotateLeft() {
    switch(this.heading) {
      case 'N':
        this.heading = 'W';
        break;
      case 'E':
        this.heading = 'N'
        break;
      case 'S':
        this.heading = 'E'
        break;
      case 'W':
        this.heading = 'S'
        break;
      default:
        break;
    }
  }

  rotateRight() {
    switch(this.heading) {
      case 'N':
        this.heading = 'E';
        break;
      case 'E':
        this.heading = 'S'
        break;
      case 'S':
        this.heading = 'W'
        break;
      case 'W':
        this.heading = 'N'
        break;
      default:
        break;
    }
  }

  moveForward(step) {
    //all cases check for grid boundaries first
    switch(this.heading) {
      case 'N':
        if (this.y < plateau.y) {
          let found = plateau.occupied.find(coordinate => {
            return coordinate === '' + this.x + ' ' + (this.y + 1);
          });
          if (!found) {
            this.y += 1;
          } else {
            console.log("Path obstructed by another rover at step #%i.", step);
          }
        } else {
          console.log("Cannot move rover outside of plateau boundaries.")
          return "blocked";
        }
        break;
      case 'E':
        if (this.x < plateau.x) {
          let found = plateau.occupied.find(coordinate => {
            return coordinate === '' + (this.x + 1) + ' ' + this.y;
          });
          if (!found) {
            this.x += 1;
          } else {
            console.log("Path obstructed by another rover at step #%i.", step);
            return "blocked";
          }
        } else {
          console.log("Cannot move rover outside of plateau boundaries.")
        }
        break;
      case 'S':
        if (this.y > 0) {
          let found = plateau.occupied.find(coordinate => {
            return coordinate === '' + this.x + ' ' + (this.y - 1);
          });
          if (!found) {
            this.y -= 1;
          } else {
            console.log("Path obstructed by another rover at step #%i.", step);
            return "blocked";
          }
        } else {
          console.log("Cannot move rover outside of plateau boundaries.")
        }
        break;
      case 'W':
        if (this.x > 0) {
          let found = plateau.occupied.find(coordinate => {
            return coordinate === '' + (this.x - 1) + ' ' + this.y;
          });
          if (!found) {
            this.x -= 1;
          } else {
            console.log("Path obstructed by another rover at step #%i.", step);
            return "blocked";
          }
        } else {
          console.log("Cannot move rover outside of plateau boundaries.")
        }
        break;
      default:
        break;
    }
  }
}

module.exports = {
  Rover: Rover,
  setGridSize: setGridSize,
  plateau: plateau
}