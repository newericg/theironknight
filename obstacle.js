// eslint-disable-next-line no-unused-vars
class Obstacles {
  constructor(height, width, x, y, ctx) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
    this.ctx = ctx;
  }

  move() {
    this.x -= 5;
  }

  draw() {
    this.img = new Image();
    this.img.src = './assets/riddlerlogo.png';
    this.ctx.drawImage(this.img, this.x, this.y, 70, 40);
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.height;
  }
}
