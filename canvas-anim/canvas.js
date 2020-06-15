const canvas = document.querySelector("canvas");

const winHeight = window.innerHeight;
const winWidth = window.innerWidth;

canvas.height = winHeight;
canvas.width = winWidth;

// c = context
const c = canvas.getContext("2d");

/**
 *
 * @param {number} x
 * @param {number} y
 * @param {number} radius
 * @param {number} startAngle
 * @param {number} endAngle
 * @param {boolean} antiClockwise
 */
function createArc(
    x,
    y,
    radius,
    startAngle,
    endAngle,
    antiClockwise = false,
    color = `#${Math.floor(Math.random() * 25542195).toString(16)}`
) {
    c.beginPath();
    c.arc(x, y, radius, startAngle, endAngle, antiClockwise);
    c.strokeStyle = color;
    c.stroke();
}

let x = 200;
let y = 200;
let speed = 5;
let xSign = 1;
let ySign = 1;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, winWidth, winHeight);
    createArc(x, y, 30, 0, Math.PI * 2, false, "pink");
    if (x + 30 >= winWidth || x - 30 <= 0) xSign = -xSign;
    if (y + 30 >= winHeight || y - 30 <= 0) ySign = -ySign;
    x += xSign * speed;
    y += ySign * speed;
}

// createArc(200, 200, 30, 0, Math.PI * 2, false, "pink");

animate();
