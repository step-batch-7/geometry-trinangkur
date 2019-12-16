const Point = require("../src/point");

class Circle {
  constructor(centre, radius) {
    this.centre = new Point(centre.x, centre.y);
    this.radius = radius;
  }
  toString() {
    const centre = `(${this.centre.x},${this.centre.y})`;
    return `[Circle @${centre} radius ${this.radius}]`;
  }
  isEqualTo(other) {
    return (
      other instanceof Circle &&
      this.centre.isEqualTo(other.centre) &&
      this.radius === other.radius
    );
  }
  get area() {
    return (22 / 7) * this.radius ** 2;
  }
  get perimeter() {
    return 2 * (22 / 7) * this.radius;
  }
  hasPoint(point) {
    return (
      point instanceof Point &&
      this.centre.findDistanceTo(point) === this.radius
    );
  }
}

module.exports = Circle;
