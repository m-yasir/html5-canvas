const canvas = document.querySelector("canvas");

canvas.height = innerHeight;
canvas.width = innerWidth;

// c = context
const c = canvas.getContext("2d");

class Circle {
    antiClockwise;
    color;
    endAngle;
    radius;
    maxSpeed;
    startAngle;
    x;
    y;
    xVel;
    yVel;

    /**
     *
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {number} startAngle
     * @param {number} endAngle
     * @param {boolean} antiClockwise
     * @param {string} color
     * @param {number} maxSpeed
     */

    constructor(
        x,
        y,
        radius,
        startAngle,
        endAngle,
        maxSpeed = 5,
        color = `#${Math.floor(Math.random() * 25542195).toString(16)}`,
        antiClockwise = false
    ) {
        this.antiClockwise = antiClockwise;
        this.color = color;
        this.endAngle = endAngle;
        this.radius = radius;
        this.maxSpeed = maxSpeed;
        this.startAngle = startAngle;
        this.x = x;
        this.y = y;
        this.xVel = (Math.random() - 0.5) * maxSpeed;
        this.yVel = (Math.random() - 0.5) * maxSpeed;
    }

    /**
     *
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {number} startAngle
     * @param {number} endAngle
     * @param {boolean} antiClockwise
     */
    createArc(
        x,
        y,
        radius,
        startAngle,
        endAngle,
        color = `#${Math.floor(Math.random() * 25542195).toString(16)}`,
        antiClockwise = false
    ) {
        c.beginPath();
        c.arc(x, y, radius, startAngle, endAngle, antiClockwise);
        c.strokeStyle = color;
        c.stroke();
    }

    draw() {
        this.createArc(
            this.x,
            this.y,
            this.radius,
            this.startAngle,
            this.endAngle,
            this.color,
            this.antiClockwise
        );
    }

    update() {
        if (this.x + 30 >= innerWidth || this.x - 30 <= 0)
            this.xVel = -this.xVel;
        if (this.y + 30 >= innerHeight || this.y - 30 <= 0)
            this.yVel = -this.yVel;
        this.x += this.xVel;
        this.y += this.yVel;
        this.draw();
    }
}

/**
 * @type Circle[]
 */
const circles = [];
for (let i = 0; i < 300; i++) {
    let r = Math.random() * 30 + 5;
    let x = Math.random() * (innerWidth - r * 2) + r;
    let y = Math.random() * (innerHeight - r * 2) + r;
    circles.push(new Circle(x, y, r, 0, Math.PI * 2, Math.random() * 8 + 1));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    circles.forEach((circle) => {
        circle.update();
    });
}

animate();
