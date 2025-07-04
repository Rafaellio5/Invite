const canvas = document.getElementById("heartsCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 100;
  this.size = 10 + Math.random() * 10;
  this.speed = 1 + Math.random() * 2;
  this.opacity = 0.7 + Math.random() * 0.3;
  this.draw = function () {
    ctx.globalAlpha = this.opacity;
    ctx.font = `${this.size}px serif`;
    ctx.fillText("❤", this.x, this.y);
  };
  this.update = function () {
    this.y -= this.speed;
    if (this.y < -10) this.y = canvas.height + Math.random() * 100;
    this.draw();
  };
}

for (let i = 0; i < 40; i++) hearts.push(new Heart());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => h.update());
  requestAnimationFrame(animate);
}
animate();
