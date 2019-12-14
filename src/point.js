class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }
  get toString() {
    return `[Point @(${this.x},${this.y})]`;
  }
}

module.exports = { Point };
