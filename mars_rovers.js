let plateau = { x: 0, y: 0};

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
    splitInstructions.map( instruction => {
      switch(instruction) {
        case 'L':
          this.rotateLeft();
          break;
        case 'R':
          this.rotateRight();
          break;
        case 'M':
          this.moveForward();
          break;
        default:
          break;
      }
    });
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
    switch(this.heading) {
      case 'N':
        if (this.y < plateau.y) {
          this.y += 1;
        }
        break;
      case 'E':
        if (this.x < plateau.x) {
          this.x += 1;
        }
        break;
      case 'S':
        if (this.y > 0) {
          this.y -= 1;
        }
        break;
      case 'W':
        if (this.x > 0) {
          this.x -= 1;
        }
        break;
      default:
        break;
    }
  }
}

module.exports = {
  Rover: Rover,
  setGridSize: setGridSize
}