const arePointsEqual = function(point1, point2) {
  return point1.x == point2.x && point1.y == point2.y;
};

class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }
  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
  visit(givenAction) {
    return givenAction(this.x, this.y);
  }
  isEqual(other) {
    return other instanceof Point && arePointsEqual(this, other);
  }
}

module.exports = { Point };
