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
}

module.exports = Rover;