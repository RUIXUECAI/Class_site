let x, y;
let c;
let down;
let stars = [];
let sky = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 0.5;
  y = height / 0.5;
  c = 255;

  for (let i = 0; i < 1000; i++) {
    stars[i] = new Star(random(width), random(height), random(255), random(0.1, 3), random(1));
  }
}

function draw() {
  background( #332B33);
  for (let i = 0; i < stars.length; i++) {
    stars[i].twinkle();
    stars[i].showStar();
  }
  //sky = map(mouseY, 0,height, 0,255);
}


class Star {
  constructor(tx, ty, tc, tf, td) {
    this.x = tx;
    this.y = ty;
    this.c = tc;
    this.f = tf;
    this.down = td;
  }

  showStar() {
    stroke(this.c)
    point(this.x, this.y);
  }

  twinkle() {
    if (this.c >= 255) {
      this.down = true;
    }
    if (this.c <= 0) {
      this.down = false;
    }

    if (this.down) {
      this.c -= this.f
    } else {
      this.c += this.f
    }
  }
}
