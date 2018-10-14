let plateau = [];

const setGridSize = (x, y) => {
  for (let count_y = 0 ; count_y <= y ; count_y++) {
    plateau.push([]);
    for (let count_x = 0 ; count_x <= x ; count_x++) {
      plateau[count_y].push(' ');
    }
  }
}

class Rover {
  constructor(position) {
    let data = position.split(' ');
    let x = parseInt(data[0]);
    let y = parseInt(data[1]);
    if (this.isBlocked(x, y)) {
      this.deployed = false;
      console.log("Error: rover cannot be deployed onto occupied spot.");
    } else {
      this.x = x;
      this.y = y;
      this.heading = data[2];
      plateau[this.y][this.x] = 'r';
    }
  }

  get position() {
    return [this.x, this.y, this.heading].join(' ');
  }

  isBlocked(x, y) {
    return plateau[y][x] === 'r'
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
          if (this.moveForward() === "blocked") {
            return "blocked";
          }
          break;
        default:
          break;
      }
    }
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

  moveForward() {
    //all cases check for grid boundaries first
    switch(this.heading) {
      case 'N':
        if (this.y < plateau.length) {
          if (!this.isBlocked(this.x, this.y + 1)) {
            plateau[this.y][this.x] = ' ';
            this.y += 1;
            plateau[this.y][this.x] = 'r';
          } else {
            console.log("Path obstructed by another rover.");
          }
        } else {
          console.log("Cannot move rover outside of plateau boundaries.")
          return "blocked";
        }
        break;
      case 'E':
        if (this.x < plateau[0].length) {
          if (!this.isBlocked(this.x + 1, this.y)) {
            plateau[this.y][this.x] = ' ';
            this.x += 1;
            plateau[this.y][this.x] = 'r';
          } else {
            console.log("Path obstructed by another rover.");
            return "blocked";
          }
        } else {
          console.log("Cannot move rover outside of plateau boundaries.")
        }
        break;
      case 'S':
        if (this.y > 0) {
          if (!this.isBlocked(this.x, this.y - 1)) {
            plateau[this.y][this.x] = ' ';
            this.y -= 1;
            plateau[this.y][this.x] = 'r';
          } else {
            console.log("Path obstructed by another rover.");
            return "blocked";
          }
        } else {
          console.log("Cannot move rover outside of plateau boundaries.")
        }
        break;
      case 'W':
        if (this.x > 0) {
          if (!this.isBlocked(this.x - 1, this.y)) {
            plateau[this.y][this.x] = ' ';
            this.x -= 1;
            plateau[this.y][this.x] = 'r';
          } else {
            console.log("Path obstructed by another rover.");
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