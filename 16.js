console.log('circle area object read only property');

const CIRCLE = {
  name: 'circle',
  lineColor: 'orange',
  bgColor: 'silver',
  radius: 4,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
}

console.log('CIRCLE.area:', CIRCLE.area);