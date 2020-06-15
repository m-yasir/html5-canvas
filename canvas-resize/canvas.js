const canvas = document.querySelector("canvas");

const winHeight = window.innerHeight;
const winWidth = window.innerWidth;

canvas.height = winHeight;
canvas.width = winWidth;

// c = context
const c = canvas.getContext("2d");

c.fillStyle = "rgba(255,0,0, 0.5)";
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0,255,0, 0.5)";
c.fillRect(500, 100, 100, 100);
c.fillStyle = "rgba(0,0,255, 0.5)";
c.fillRect(500, 300, 400, 100);

// Line
c.beginPath();

c.moveTo(50, 300);

c.lineTo(300, 100);
c.lineTo(600, 100);
c.strokeStyle = "#fa34a3";
c.stroke();

// Arcs/Circles

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {boolean} antiClockwise
 */
function createArc(x, y, radius, startAngle, endAngle, antiClockwise = false) {
  c.beginPath();
  c.arc(x, y, radius, startAngle, endAngle);
  c.strokeStyle = `#${Math.floor(Math.random() * 25542195).toString(16)}`;
  c.stroke();
}

// createArc(Math.random() * winWidth, Math.random() * winHeight, 30, 0, Math.PI * 2);

for (let i = 0; i < 100; i++) {
  createArc(
    Math.random() * winWidth,
    Math.random() * winHeight,
    30,
    0,
    Math.PI * 2
  );
}

setTimeout(() => {
  window.location.reload();
}, 60);
