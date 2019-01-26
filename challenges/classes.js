// 1. Copy and paste your prototype in here and refactor into class syntax.

"use strict";


class CuboidMaker {
	constructor(props) {
		this.length = props.length;
		this.width = props.width;
		this.height = props.height;
	}

	volume() {
		return this.length * this.width * this.height;
	}

	surfaceArea() {
		return 2 *
			(this.length * this.width + this.length * this.height + this.width * this.height);
	}
}

const cuboid = new CuboidMaker({length: 4, width: 5, height: 5});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.
// Find out the formulas for volume and surface area for cubes and create those methods
// using the dimension properties from CuboidMaker.  Test your work by logging out your
// volume and surface area.


// Since Cubemaker only has a single property, we will pass its value directly
// instead of making it a member of a props object.  The parent's volume and surfaceArea
// methods will continue to work as is, so no changes needed (that's the whole point
// of inheritence, right?)

class CubeMaker extends CuboidMaker {
	constructor(size) {
		super({length: size, width: size, height: size});
		this.size = size;
	}
}


const cubeyMcCubeFace = new CubeMaker(5);

console.log(`I am a cube of size ${cubeyMcCubeFace.size} units.`);
console.log(`My volume is ${cubeyMcCubeFace.volume()} units cubed.`);
console.log(`My surface area is ${cubeyMcCubeFace.surfaceArea()} units squared.`);

