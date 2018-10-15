let plateau = [];

const setGridSize = (x, y) => {
  plateau = [];
  for (let count_y = 0 ; count_y <= y ; count_y++) {
    plateau.push([]);
    for (let count_x = 0 ; count_x <= x ; count_x++) {
      plateau[count_y].push(' ');
    }
  }
}

class Rover {
  constructor(position, id) {
    this.id = id;
    this.hitBoundaries = false;
    let data = position.split(' ');
    let x = parseInt(data[0]);
    let y = parseInt(data[1]);
    if ( (x >= 0 && x < plateau[0].length) && (y >= 0 && y < plateau.length) ) {
      if (this.isBlocked(x, y)) {
        this.deployed = false;
        console.log(this.id + ": Cannot be deployed onto occupied spot.\n");
      } else {
        this.deployed = true;
        this.x = x;
        this.y = y;
        this.heading = data[2];
        plateau[this.y][this.x] = 'r';
      }
    } else {
      this.deployed = false;
      console.log(this.id + ": Cannot be deployed outside of plateau boundaries.\n");
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
        if (this.y < plateau.length - 1) {
          if (!this.isBlocked(this.x, this.y + 1)) {
            plateau[this.y][this.x] = ' ';
            this.y += 1;
            plateau[this.y][this.x] = 'r';
          } else {
            return "blocked";
          }
        } else {
          this.hitBoundaries = true;
        }
        break;
      case 'E':
        if (this.x < plateau[0].length - 1) {
          if (!this.isBlocked(this.x + 1, this.y)) {
            plateau[this.y][this.x] = ' ';
            this.x += 1;
            plateau[this.y][this.x] = 'r';
          } else {
            return "blocked";
          }
        } else {
          this.hitBoundaries = true;
        }
        break;
      case 'S':
        if (this.y > 0) {
          if (!this.isBlocked(this.x, this.y - 1)) {
            plateau[this.y][this.x] = ' ';
            this.y -= 1;
            plateau[this.y][this.x] = 'r';
          } else {
            return "blocked";
          }
        } else {
          this.hitBoundaries = true;
        }
        break;
      case 'W':
        if (this.x > 0) {
          if (!this.isBlocked(this.x - 1, this.y)) {
            plateau[this.y][this.x] = ' ';
            this.x -= 1;
            plateau[this.y][this.x] = 'r';
          } else {
            return "blocked";
          }
        } else {
          this.hitBoundaries = true;
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