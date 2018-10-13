class Rover {
  constructor(position) {
    let data = position.split(' ');
    this.x = data[0];
    this.y = data[1];
    this.heading = data[2];
  }

  get roverPosition() {
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

  }

  moveForward() {
    switch(this.heading) {
      case 'N':
        this.y += 1;
        break;
      case 'E':
        this.x += 1;
        break;
      case 'S':
        this.y -= 1;
        break;
      case 'W':
        this.x -= 1;
        break;
      default:
        break;
    }
  }
}

module.exports = Rover;